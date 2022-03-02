using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApp.Data;
using WebApp.Models;
namespace WebApp.Controllers
{
    [Route("[controller]")]
    [ApiController]

    public class UserController: Controller
    {
        private UserContext _context;

        public UserController(UserContext context){
            _context=context;
        }

         [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        [HttpGet("{id}")]
        
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var employee = await _context.Users.FindAsync(id);

            if (employee == null)
            {
                return NotFound();
            }

            return employee;
        }


        [HttpPost]
        public async Task<ActionResult<User>> AddUser(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUser", new { id = user.userId }, user);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditUser(int id, User user)
        {
            if (id != user.userId)
            {
                return BadRequest();
            }

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
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
        [HttpDelete("{id}")]
        public async Task<ActionResult<User>> DeleteUser(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return user;
        }
        private bool UserExists(int id)
        {
            return _context.Users.Any(e => e.userId == id);
        }
            
      }
}
        
    



  