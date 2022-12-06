using WatchListAPI.Models;

namespace WatchListAPI.Services
{
    public interface IWatchListService
    {
        List<WatchList> Get();
        WatchList Get(string username);
        WatchList Create(WatchList watchlist);
        void Update(string username, WatchList watchlist);
        void Remove(string username);
    }
}
