using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using pollutionApi.Models;
using System.Linq;

namespace pollutionApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowOrigin")]
    public class UserController : ControllerBase
    {

        private readonly IConfiguration _config;
        public readonly UserContext _context;

        public UserController(IConfiguration config, UserContext context)
        {
            _config = config;
            _context = context;
        }

        [HttpPost("CreateUser")]

        public IActionResult Create(user user)
        {
            if (_context.Users.Where(u =>u.email == user.email).FirstOrDefault() != null)
            {
                return Ok("Already Exists");
            }
            _context.Users.Add(user);
            _context.SaveChanges();
            return Ok("Success");
          
        }

        [HttpPost("LoginUser")]

        public IActionResult Login(Login user)
        {
            var UserAvailable = _context.Users.Where(u => u.email == user.email && u.password == user.password).FirstOrDefault();
            var Uname = _context.Users.Where(u => u.email == user.email && u.password == user.password).FirstOrDefault();
            if (UserAvailable != null)
            {
                Uname.name = user.email;
                _context.SaveChanges();
                return Ok(Uname.userName);
            }
            return Ok("Failure");
            
        }

        [HttpPost("UpdateUser")]

        public IActionResult Update(update user)
        {
            var UserAvailable = _context.Users.Where(u => u.email == user.email).FirstOrDefault();
            var Uname = _context.Users.Where(u => u.email == user.email).FirstOrDefault();
            if (UserAvailable != null)
            {
                Uname.password = user.password;
                _context.SaveChanges();
                return Ok("success");
            }
            return Ok("Failure");
        }

















    }
}
