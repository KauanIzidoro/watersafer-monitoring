using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WaterSaferAPI;

namespace WaterSaferAPI.Data
{
    public class WaterSaferContext : DbContext
    {
        public WaterSaferContext (DbContextOptions<WaterSaferContext> options)
            : base(options)
        {
        }

        public DbSet<WaterSaferAPI.WaterLog> WaterLog { get; set; } = default!;
        public DbSet<WaterSaferAPI.WaterTank> WaterTank { get; set; } = default!;
    }
}
