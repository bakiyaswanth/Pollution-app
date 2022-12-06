namespace WatchListAPI.Models
{
    public interface IWatchListStoreDatabaseSettings
    {
        string WatchListCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}
