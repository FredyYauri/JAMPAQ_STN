using Microsoft.AspNetCore.Mvc;
using STN.Bussiness.Seguridad;
using System.Data;
using System;
using System.Collections.Generic;
using STN.Web.Api.Entities;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Authorization;

namespace STN.Web.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsuariosController : ControllerBase
    {
        private readonly BSUsuario _bsUsuario;
        private readonly IConfiguration _configuration;
        public UsuariosController(ApplicationDbContext context, IConfiguration configuration)
        {
            _bsUsuario = new BSUsuario(context);
            _configuration = configuration;
        }

        [HttpGet("ObtenerResultado")]
        public IActionResult ObtenerResultado([FromQuery] RequestUsuario request)
        {
            try
            {
                var resultado = _bsUsuario.ObtenerResultado(request.usuario, request.clave, request.compania);
                ResponseUsuario response = new ResponseUsuario();
                if (resultado.Rows.Count == 0)
                { 
                    response.status = 1;
                    response.mesage = "Usuario o clave incorrectos";
                }
                else
                {
                    response.status = 0;
                    response.data = ConvertDataTableToJson(resultado);
                    var firstRow = response.data[0];
                    if (firstRow.TryGetValue("IDUsuario", out var idUsuario))
                    {
                        response.token = GenerateJwtToken(idUsuario.ToString());
                    }
                    
                }
                return Ok(response);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("prueba")]
        [Authorize]
        public IActionResult Prueba()
        {
            ResponseUsuario response = new ResponseUsuario();
            response.status = 1;
            response.mesage = "Usuario o clave incorrectos";
            return Ok(response);
        }

        #region Métodos Auxiliares

        // Método para convertir un DataTable a una lista de diccionarios
        private List<Dictionary<string, object>> ConvertDataTableToJson(DataTable dataTable)
        {
            var jsonResult = new List<Dictionary<string, object>>();

            foreach (DataRow row in dataTable.Rows)
            {
                var dict = new Dictionary<string, object>();
                foreach (DataColumn col in dataTable.Columns)
                {
                    dict[col.ColumnName] = row[col];
                }
                jsonResult.Add(dict);
            }

            return jsonResult;
        }

        //Generar token JWT
        private string GenerateJwtToken(string username)
        {
            var jwtSettings = _configuration.GetSection("JwtSettings");
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.UTF8.GetBytes(jwtSettings["SecretKey"]);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim(ClaimTypes.Name, username)
                }),
                Expires = DateTime.UtcNow.AddHours(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature),
                Issuer = jwtSettings["Issuer"],
                Audience = jwtSettings["Audience"],
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        } 
        #endregion

    }
}
