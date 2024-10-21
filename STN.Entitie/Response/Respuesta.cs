namespace STN.Entitie.Response
{
    public class Respuesta
    {
        public bool Resultado { get; set; } = false;
        public string CodigoError { get; set; }
        public object Data { get; set; }
    }
}
