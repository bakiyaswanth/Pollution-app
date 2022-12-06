using Microsoft.Extensions.Options;
using MongoDB.Driver;
using WatchListAPI.Models;
using WatchListAPI.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.Configure<WatchListStoreDatabaseSettings>(
                builder.Configuration.GetSection(nameof(WatchListStoreDatabaseSettings)));

builder.Services.AddSingleton<IWatchListStoreDatabaseSettings>(sp =>
    sp.GetRequiredService<IOptions<WatchListStoreDatabaseSettings>>().Value);

builder.Services.AddSingleton<IMongoClient>(s =>
        new MongoClient(builder.Configuration.GetValue<string>("WatchListStoreDatabaseSettings:ConnectionString")));

builder.Services.AddScoped<IWatchListService, WatchListService>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(p => p.AddPolicy("corspolicy", build =>
{
    build.WithOrigins("http://localhost:4200").AllowAnyHeader().AllowAnyMethod();
}));

var app = builder.Build();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors("corspolicy");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();


