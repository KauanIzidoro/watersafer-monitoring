using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using WaterSaferAPI.Data;
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<WaterSaferContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("WaterSaferContext") ?? throw new InvalidOperationException("Connection string 'WaterSaferContext' not found.")));


builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
