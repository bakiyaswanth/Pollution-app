using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace WatchListAPI.Models
{
    [BsonIgnoreExtraElements]
    public class WatchList
    {

        [BsonElement("username")]
        public string userName { get; set; } = String.Empty;

        [BsonElement("country")]
        public string country { get; set; } = String.Empty;

        [BsonElement("state")]
        public string state { get; set; } = String.Empty;

        [BsonElement("city")]
        public string city { get; set; } = String.Empty;





    }
}
