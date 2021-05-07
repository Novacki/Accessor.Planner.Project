using Microsoft.EntityFrameworkCore.Migrations;

namespace Accessor.Planner.Infrastructure.Migrations
{
    public partial class change_accessor_id_in_solicitation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "AcessorId",
                table: "Solicitations",
                newName: "AccessorId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "AccessorId",
                table: "Solicitations",
                newName: "AcessorId");
        }
    }
}
