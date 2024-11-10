namespace WaterSaferAPI;

public class WaterLog
{
    public int Id {get;set;}
    public float Distance {get;set;}
    public string Date {get;set;}
    public int WaterTankId { get; set; }
}