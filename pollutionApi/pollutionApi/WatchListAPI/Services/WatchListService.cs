using MongoDB.Driver;
using WatchListAPI.Models;

namespace WatchListAPI.Services
{
    public class WatchListService : IWatchListService
    {
        private readonly IMongoCollection<WatchList> _watchlist;

        public WatchListService(IWatchListStoreDatabaseSettings settings, IMongoClient mongoClient)
        {
            var database = mongoClient.GetDatabase(settings.DatabaseName);
            _watchlist = database.GetCollection<WatchList>(settings.WatchListCollectionName);
        }

        public WatchList Create(WatchList data)
        {
            _watchlist.InsertOne(data);
            return data;
        }

        public List<WatchList> Get()
        {
            return _watchlist.Find(data => true).ToList();
        }

        public WatchList Get(string username)
        {
            return _watchlist.Find(data => data.userName == username).FirstOrDefault();
        }

        public void Remove(string username)
        {
            _watchlist.DeleteOne(data => data.userName == username);
        }

        public void Update(string username, WatchList data)
        {
            _watchlist.ReplaceOne(data => data.userName == username,data);
        }
    }
}
