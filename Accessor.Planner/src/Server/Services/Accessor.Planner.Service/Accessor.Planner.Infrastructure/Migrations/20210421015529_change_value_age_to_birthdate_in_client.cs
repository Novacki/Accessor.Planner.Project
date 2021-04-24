using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Accessor.Planner.Infrastructure.Migrations
{
    public partial class change_value_age_to_birthdate_in_client : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Age",
                table: "Clients");

            migrationBuilder.AddColumn<DateTime>(
                name: "BirthDate",
                table: "Clients",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BirthDate",
                table: "Clients");

            migrationBuilder.AddColumn<int>(
                name: "Age",
                table: "Clients",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
