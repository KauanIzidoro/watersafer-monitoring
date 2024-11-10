using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WaterSaferAPI.Migrations
{
    /// <inheritdoc />
    public partial class NewMigrationForWaterLog : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Quantity",
                table: "WaterLog",
                newName: "Distance");

            migrationBuilder.AddColumn<int>(
                name: "WaterTankId",
                table: "WaterLog",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "WaterTankId",
                table: "WaterLog");

            migrationBuilder.RenameColumn(
                name: "Distance",
                table: "WaterLog",
                newName: "Quantity");
        }
    }
}
