using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace STN.Bussiness
{
    public static class ServiceCollectionExtensions
    {
        public static void AddBusinessServices(this IServiceCollection services, string connectionString)
        {
            // Configura ApplicationDbContext con la cadena de conexión
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(connectionString));

            // Aquí puedes agregar otros servicios relacionados con la capa Bussiness
            // services.AddScoped<IMyService, MyService>();
        }
    }
}
