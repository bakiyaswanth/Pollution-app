﻿namespace WatchListAPI.Models
{
    public class WatchListStoreDatabaseSettings : IWatchListStoreDatabaseSettings
    {
        public string WatchListCollectionName { get; set; } = String.Empty;
        public string ConnectionString { get; set; } = String.Empty;
        public string DatabaseName { get; set; } = String.Empty;
    }
}
