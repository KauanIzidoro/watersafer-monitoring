using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WaterSaferAPI;
using WaterSaferAPI.Data;

namespace WaterSaferAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WaterTanksController : ControllerBase
    {
        private readonly WaterSaferContext _context;

        public WaterTanksController(WaterSaferContext context)
        {
            _context = context;
        }

        // GET: api/WaterTanks
        [HttpGet]
        public async Task<ActionResult<IEnumerable<WaterTank>>> GetWaterTank()
        {
            return await _context.WaterTank.ToListAsync();
        }

        // GET: api/WaterTanks/5
        [HttpGet("{id}")]
        public async Task<ActionResult<WaterTank>> GetWaterTank(int id)
        {
            var waterTank = await _context.WaterTank.FindAsync(id);

            if (waterTank == null)
            {
                return NotFound();
            }

            return waterTank;
        }

        // PUT: api/WaterTanks/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutWaterTank(int id, WaterTank waterTank)
        {
            if (id != waterTank.Id)
            {
                return BadRequest();
            }

            _context.Entry(waterTank).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WaterTankExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/WaterTanks
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<WaterTank>> PostWaterTank(WaterTank waterTank)
        {
            _context.WaterTank.Add(waterTank);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetWaterTank", new { id = waterTank.Id }, waterTank);
        }

        // DELETE: api/WaterTanks/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteWaterTank(int id)
        {
            var waterTank = await _context.WaterTank.FindAsync(id);
            if (waterTank == null)
            {
                return NotFound();
            }

            _context.WaterTank.Remove(waterTank);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool WaterTankExists(int id)
        {
            return _context.WaterTank.Any(e => e.Id == id);
        }
    }
}
