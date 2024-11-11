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
    public class WaterLogsController : ControllerBase
    {
        private readonly WaterSaferContext _context;

        public WaterLogsController(WaterSaferContext context)
        {
            _context = context;
        }

        // GET: api/WaterLogs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<WaterLog>>> GetWaterLog()
        {

            return await _context.WaterLog.ToListAsync();
        }

        [HttpGet("WaterVolume")]
        public async Task<ActionResult<double>> GetWaterVolume()
        {
            // Consulra para obter  o último valor da distância medido pelo sensor acoplado ao tanque
            var SensorDistance = await _context.WaterLog.Select(w => w.Distance).ToListAsync();

            // Consultas para obter as dimensões do tanque dado o Id
            double WaterTankDiameter = 58; // 58cm
            double WaterTankHeight = 97; // 97cm

            // Cálculo do volume atual de água no tanque, neste caso observe que o tanqye é cilindrico
            // O resultado é obtido em cm³, pois as dimensões e a distância medida pelo sensor é nesta unidade.
            double WaterTankVolumeTotal = WaterTankHeight * Math.Pow(WaterTankDiameter / 2, 2) * Math.PI; // cm³
            var WaterVolumeCurrently = (WaterTankHeight - SensorDistance[0]) * Math.Pow(Math.PI * (WaterTankDiameter / 2), 2);
            var result = (WaterTankVolumeTotal - (SensorDistance[0] * Math.Pow(WaterTankDiameter / 2, 2) * Math.PI))/1000;
            
            // A exibição deste valor deve ser feita com apenas 2 casa decimais e em Litros
            var WaterVolume = Math.Round(result, 2);

            return Ok(new { WaterVolume });
        }

        // GET: api/WaterLogs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<WaterLog>> GetWaterLog(int id)
        {
            var waterLog = await _context.WaterLog.FindAsync(id);

            if (waterLog == null)
            {
                return NotFound();
            }

            return waterLog;
        }

        // PUT: api/WaterLogs/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutWaterLog(int id, WaterLog waterLog)
        {
            if (id != waterLog.Id)
            {
                return BadRequest();
            }

            _context.Entry(waterLog).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WaterLogExists(id))
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

        // POST: api/WaterLogs
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<WaterLog>> PostWaterLog(WaterLog waterLog)
        {
            _context.WaterLog.Add(waterLog);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetWaterLog", new { id = waterLog.Id }, waterLog);
        }

        // DELETE: api/WaterLogs/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteWaterLog(int id)
        {
            var waterLog = await _context.WaterLog.FindAsync(id);
            if (waterLog == null)
            {
                return NotFound();
            }

            _context.WaterLog.Remove(waterLog);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool WaterLogExists(int id)
        {
            return _context.WaterLog.Any(e => e.Id == id);
        }
    }
}
