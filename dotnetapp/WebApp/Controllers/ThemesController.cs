#nullable disable
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApp.Models;

namespace WebApp.Controllers
{
    [ApiController]
    public class ThemeController : ControllerBase
    {
        private readonly DataContext _context;

        public ThemeController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Themes
        [HttpGet]
        [Route("admin/getTheme")]
        public async Task<ActionResult<IEnumerable<Theme>>> getTheme()
        {
            return await _context.Themes.ToListAsync();
        }

        // GET: api/Themes/5
        [HttpGet]
        [Route("admin/getTheme/{themeId}")]
        public async Task<ActionResult<Theme>> getTheme(int themeId)
        {
            var theme = await _context.Themes.FindAsync(themeId);

            if (theme == null)
            {
                return NotFound();
            }

            return theme;
        }

        // PUT: api/Themes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        [Route("admin/editTheme/{themeId}")]
        public async Task<IActionResult> editTheme(int themeId, Theme theme)
        {
            if (themeId != theme.themeId)
            {
                return BadRequest();
            }

            _context.Entry(theme).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ThemeExists(themeId))
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

        // POST: api/Themes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [Route("admin/addTheme")]
        public async Task<ActionResult<Theme>> addTheme(Theme theme)
        {
            _context.Themes.Add(theme);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTheme", new { themeId = theme.themeId }, theme);
        }

        // DELETE: api/Themes/5
        [HttpDelete]
        [Route("admin/deleteTheme/{themeId}")]
        public async Task<IActionResult> deleteTheme(int themeId)
        {
            var theme = await _context.Themes.FindAsync(themeId);
            if (theme == null)
            {
                return NotFound();
            }

            _context.Themes.Remove(theme);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ThemeExists(int themeId)
        {
            return _context.Themes.Any(e => e.themeId == themeId);
        }
    }
}
