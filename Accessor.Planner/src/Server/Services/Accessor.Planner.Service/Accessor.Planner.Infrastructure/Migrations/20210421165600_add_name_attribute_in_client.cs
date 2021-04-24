using Microsoft.EntityFrameworkCore.Migrations;

namespace Accessor.Planner.Infrastructure.Migrations
{
    public partial class add_name_attribute_in_client : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Clients",
                type: "nvarchar(50)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "Clients");
        }
    }
}
