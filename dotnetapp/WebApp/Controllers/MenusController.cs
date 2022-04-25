#nullable disable
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApp.Models;

namespace WebApp.Controllers
{
    [ApiController]
    public class MenusController : ControllerBase
    {
        private readonly DataContext _context;

        public MenusController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Menus
        [HttpGet]
        [Route("admin/getMenu")]
        public async Task<ActionResult<IEnumerable<Menu>>> getMenu()
        {
            return await _context.Menus.ToListAsync();
        }

        // GET: api/Menus/5
        [HttpGet]
        [Route("admin/getMenu/{menuId}")]
        public async Task<ActionResult<Menu>> getMenu(int menuId)
        {
            var menu = await _context.Menus.FindAsync(menuId);

            if (menu == null)
            {
                return NotFound();
            }

            return menu;
        }

        // PUT: api/Menus/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        [Route("admin/editMenu/{menuId}")]
        public async Task<IActionResult> editMenu(int menuId, Menu menu)
        {
            if (menuId != menu.foodMenuId)
            {
                return BadRequest();
            }

            _context.Entry(menu).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MenuExists(menuId))
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

        // POST: api/Menus
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [Route("admin/addMenu")]
        public async Task<ActionResult<Menu>> addMenu(Menu menu)
        {
            _context.Menus.Add(menu);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMenu", new { menuId = menu.foodMenuId }, menu);
        }

        // DELETE: api/Menus/5
        [HttpDelete]
        [Route("admin/deleteMenu/{menuId}")]
        public async Task<IActionResult> deleteMenu(int menuId)
        {
            var menu = await _context.Menus.FindAsync(menuId);
            if (menu == null)
            {
                return NotFound();
            }

            _context.Menus.Remove(menu);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MenuExists(int menuId)
        {
            return _context.Menus.Any(e => e.foodMenuId == menuId);
        }
    }
}
