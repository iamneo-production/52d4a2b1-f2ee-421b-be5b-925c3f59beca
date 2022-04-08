using System.Runtime.CompilerServices;
using System.Globalization;
using System.Reflection.Metadata;
using System.Collections.Concurrent;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using System.Security.Cryptography;
using BirthdayEvents.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BirthdayEvents.Dto;

namespace BirthdayEvents.Controllers
{
    [Route("")]
    [ApiController]
    
    public class AuthController : ControllerBase
    {
        private DataContext _context;
        public AuthController(DataContext context)
        {
            _context = context;
        }

       /*[HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUser()
        {
            return await _context.User.ToListAsync();
        }*/
         [HttpPost("user/signup")]
        public async Task<ActionResult<User>> signup(RegisterDto registerDto)
        {

            if(await IsUserExists(registerDto.UserName)) return BadRequest("UserName is taken");
                var user = new User
                {
                    userId=registerDto.userId,
                    email = registerDto.Email,
                    userName = registerDto.UserName,
                    mobileNumber = registerDto.MobileNumber,
                    password = registerDto.Password,
                    userRole = registerDto.UserRole
                };
                _context.User.Add(user);
                await _context.SaveChangesAsync();
                return user;
        } 

          [HttpPost("user/login")]
        public async Task<ActionResult<User>> Login(LoginDto loginDto)
        {
                
                var email_exits = await _context.User.SingleOrDefaultAsync(x => x.email == loginDto.Email);

                if(email_exits != null &&  loginDto.Password.CompareTo(email_exits.password)==0)
                {
                    
                    return email_exits;
                }
                return BadRequest( new { StatusCode = 404, Message = " User Not Found", Allowed = false });

        }

        private async Task<bool> IsUserExists(string username)
        {
                return await _context.User.AnyAsync(x => x.userName == username.ToLower());
        }
    }
}