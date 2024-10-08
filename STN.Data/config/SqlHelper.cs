﻿using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;

namespace STN.Data
{
    public class SqlHelper
    {
        private readonly ApplicationDbContext _connectionString;
        public SqlHelper(ApplicationDbContext connectionString)
        {
            _connectionString = connectionString;
        }

        // Método genérico para ejecutar una consulta SELECT y devolver un DataTable
        public async Task<DataTable> ExecuteQueryAsync(string query, SqlParameter[] parameters = null)
        {
            using (SqlConnection connection = new SqlConnection(_connectionString.Database.GetConnectionString()))
            {
                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    if (parameters != null)
                    {
                        command.Parameters.AddRange(parameters);
                    }

                    await connection.OpenAsync();

                    using (SqlDataAdapter adapter = new SqlDataAdapter(command))
                    {
                        DataTable dataTable = new DataTable();
                        adapter.Fill(dataTable);
                        return dataTable;
                    }
                }
            }
        }

        // Método para ejecutar una consulta INSERT, UPDATE o DELETE (sin resultados)
        public async Task<int> ExecuteNonQueryAsync(string query, SqlParameter[] parameters = null)
        {
            using (SqlConnection connection = new SqlConnection(_connectionString.Database.GetConnectionString()))
            {
                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    if (parameters != null)
                    {
                        command.Parameters.AddRange(parameters);
                    }

                    await connection.OpenAsync();
                    return await command.ExecuteNonQueryAsync();
                }
            }
        }

        // Método para ejecutar una consulta que devuelve un valor escalar (un solo resultado)
        public async Task<object> ExecuteScalarAsync(string query, SqlParameter[] parameters = null)
        {
            using (SqlConnection connection = new SqlConnection(_connectionString.Database.GetConnectionString()))
            {
                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    if (parameters != null)
                    {
                        command.Parameters.AddRange(parameters);
                    }

                    await connection.OpenAsync();
                    return await command.ExecuteScalarAsync();
                }
            }
        }

        // Método para ejecutar un procedimiento almacenado
        public async Task<DataTable> ExecuteStoredProcedureAsync(string storedProcedureName, SqlParameter[] parameters = null)
        {
            using (SqlConnection connection = new SqlConnection(_connectionString.Database.GetConnectionString()))
            {
                using (SqlCommand command = new SqlCommand(storedProcedureName, connection))
                {
                    command.CommandType = CommandType.StoredProcedure;

                    if (parameters != null)
                    {
                        command.Parameters.AddRange(parameters);
                    }

                    await connection.OpenAsync();

                    using (SqlDataAdapter adapter = new SqlDataAdapter(command))
                    {
                        DataTable dataTable = new DataTable();
                        adapter.Fill(dataTable);
                        return dataTable;
                    }
                }
            }
        }



        #region Métodos No Transaccionales
        
        private Hashtable ComandosCache;
        // Método para ejecutar un procedimiento almacenado
        public DataTable fn_ObtenerResultado(string store_p, params object[] Argumentos)
        {
            DataTable table2;

            try
            {
                DataSet dataSet = new DataSet();
                dataSet = this.fn_CrearAdaptador(store_p, Argumentos);
                table2 = dataSet.Tables[0];
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return table2;
        }

        private DataSet fn_CrearAdaptador(string store_p, params object[] Args)
        {
            SqlDataAdapter oSqlDataAdapter = null;
            SqlConnection oSqlConnection = null;
            DataSet oDataSet = new DataSet();
            try
            {
                oSqlConnection = new SqlConnection(_connectionString.Database.GetConnectionString());
                oSqlConnection.Open();
                SqlCommand comando = this.CreaComandos(store_p, oSqlConnection);

                if (Args.Length != 0)
                {
                    this.cargaParametros(comando, Args, false);
                }
                oSqlDataAdapter = new SqlDataAdapter(comando);
                oSqlDataAdapter.Fill(oDataSet);
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                oSqlConnection.Close();
                if (oSqlConnection != null) ((IDisposable)oSqlConnection).Dispose();
                if (oSqlDataAdapter != null) ((IDisposable)oSqlDataAdapter).Dispose();
            }
            return oDataSet;
        }

        private SqlCommand CreaComandos(string StoreProcedure, SqlConnection oSqlConnection)
        {
            SqlCommand command;
            this.ComandosCache = new Hashtable();
            try
            {
                SqlCommand command3 = new SqlCommand();
                if (this.ComandosCache.Contains(StoreProcedure))
                {
                    command3 = (SqlCommand)this.ComandosCache[StoreProcedure];
                }
                else
                {
                    command3 = new SqlCommand(StoreProcedure, oSqlConnection)
                    {
                        CommandType = CommandType.StoredProcedure
                    };
                    SqlCommandBuilder.DeriveParameters(command3);
                    command3.Parameters.RemoveAt(0);
                    int num2 = command3.Parameters.Count - 1;
                    for (int i = 0; i <= num2; i++)
                    {
                        string sourceColumn = command3.Parameters[i].SourceColumn;
                    }
                    this.ComandosCache.Add(StoreProcedure, command3);
                }
                command = command3;
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return command;
        }

        private void cargaParametros(SqlCommand comando, object[] args, bool spoutput)
        {
            int num3 = args.Length - 1;
            int count = comando.Parameters.Count;

            for (int i = 0; i <= num3; i++)
            {
                try
                {
                    if ((i == 0) & spoutput)
                    {
                        comando.Parameters[i].Direction = ParameterDirection.Output;
                    }
                    else
                    {

                        comando.Parameters[i].Value = RuntimeHelpers.GetObjectValue(args[i]);
                    }
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
        } 
        #endregion
    }
}
