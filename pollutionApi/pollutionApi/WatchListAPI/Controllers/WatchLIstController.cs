using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using WatchListAPI.Models;
using WatchListAPI.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WatchListAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("corspolicy")]
    public class WatchListController : ControllerBase
    {
        private readonly IWatchListService watchlistService;

        public WatchListController(IWatchListService watchlistService)
        {
            this.watchlistService = watchlistService;
        }
        // GET: api/<WatchListController>
        [HttpGet]
        public ActionResult<List<WatchList>> Get()
        {
            return watchlistService.Get();
        }

        // GET api/<WatchListController>/5
        [HttpGet("{username}")]
        public ActionResult<WatchList> Get(string username)
        {
            var watchlist = watchlistService.Get(username);

            if (watchlist == null)
            {
                return NotFound($"User with Id = {username} not found");
            }

            return watchlist;
        }

        //POST api/<WatchListController>
        [HttpPost("add")]
        public ActionResult<WatchList> Post([FromBody] WatchList data)
        {
            watchlistService.Create(data);

            return CreatedAtAction(nameof(Get), new { username = data.userName }, data);
        }

        //// PUT api/<WatchListController>/5
        //[HttpPut("{id}")]
        //public ActionResult Put(string id, [FromBody] WatchList watchlist)
        //{
        //    var existingUser = watchlistService.Get(id);

        //    if (existingUser == null)
        //    {
        //        return NotFound($"User with Id = {id} not found");
        //    }

        //    watchlistService.Update(id, watchlist);

        //    return NoContent();
        //}

        // DELETE api/<WatchListController>/5
        [HttpDelete("{username}")]
        public ActionResult Delete(string username)
        {
            var data = watchlistService.Get(username);

            if (data == null)
            {
                return NotFound($"Not found");
            }

            watchlistService.Remove(data.userName);

            return Ok($"Removed from WatchList");
        }
    }
}
