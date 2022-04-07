#nullable disable
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApp.Models;

namespace WebApp.Controllers
{
    [ApiController]
    public class AddOnsController : ControllerBase
    {
        private readonly DataContext _context;

        public AddOnsController(DataContext context)
        {
            _context = context;
        }

        // GET: api/AddOns
        [HttpGet]
        [Route("admin/getAddOn")]
        public async Task<ActionResult<IEnumerable<AddOn>>> GetAddOns()
        {
            return await _context.AddOns.ToListAsync();
        }

        // GET: api/AddOns/5
        [HttpGet]
        [Route("admin/getAddOn/{addOnId}")]
        public async Task<ActionResult<AddOn>> GetAddOn(int addOnId)
        {
            var addOn = await _context.AddOns.FindAsync(addOnId);

            if (addOn == null)
            {
                return NotFound();
            }

            return addOn;
        }

        [HttpPut]
        [Route("admin/editAddOn/{addOnId}")]
        public async Task<IActionResult> PutAddOn(int addOnId, AddOn addOn)
        {
            if (addOnId != addOn.addOnId)
            {
                return BadRequest();
            }

            _context.Entry(addOn).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AddOnExists(addOnId))
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

        // POST: api/AddOns
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [Route("admin/addAddOn")]
        public async Task<ActionResult<AddOn>> PostAddOn(AddOn addOn)
        {
            _context.AddOns.Add(addOn);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAddOn", new { addOnId = addOn.addOnId }, addOn);
        }

        // DELETE: api/AddOns/5 
        [HttpDelete]
        [Route("admin/deleteAddOn/{addOnId}")]
        public async Task<IActionResult> DeleteAddOn(int addOnId)
        {
            var addOn = await _context.AddOns.FindAsync(addOnId);
            if (addOn == null)
            {
                return NotFound();
            }

            _context.AddOns.Remove(addOn);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AddOnExists(int addOnId)
        {
            return _context.AddOns.Any(e => e.addOnId == addOnId);
        }
    }
}
