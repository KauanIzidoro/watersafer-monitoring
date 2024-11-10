namespace WaterSaferAPI;

public class WaterLog
{
    public int Id {get;set;}
    public double Distance {get;set;}
    public required string Datetime {get;set;}
    public int WaterTankId { get; set; }
}