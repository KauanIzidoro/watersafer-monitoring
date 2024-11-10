using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WaterSaferAPI.Migrations
{
    /// <inheritdoc />
    public partial class RefactorWaterTankAndWaterLog : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Volume",
                table: "WaterTank",
                newName: "Height");

            migrationBuilder.RenameColumn(
                name: "Date",
                table: "WaterLog",
                newName: "Datetime");

            migrationBuilder.AddColumn<double>(
                name: "Capacity",
                table: "WaterTank",
                type: "REAL",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "Diameter",
                table: "WaterTank",
                type: "REAL",
                nullable: false,
                defaultValue: 0.0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Capacity",
                table: "WaterTank");

            migrationBuilder.DropColumn(
                name: "Diameter",
                table: "WaterTank");

            migrationBuilder.RenameColumn(
                name: "Height",
                table: "WaterTank",
                newName: "Volume");

            migrationBuilder.RenameColumn(
                name: "Datetime",
                table: "WaterLog",
                newName: "Date");
        }
    }
}
