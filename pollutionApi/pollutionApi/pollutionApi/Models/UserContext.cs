using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace pollutionApi.Models
{
    public class UserContext: DbContext
    {
        public UserContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<user> Users { get; set; }



    }
}
