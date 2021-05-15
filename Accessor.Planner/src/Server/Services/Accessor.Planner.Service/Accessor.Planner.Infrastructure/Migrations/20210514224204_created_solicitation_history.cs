using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Accessor.Planner.Infrastructure.Migrations
{
    public partial class created_solicitation_history : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "SolicitationHistories",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    AcessorId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    ProviderId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    Value = table.Column<double>(type: "float", nullable: true),
                    Status = table.Column<int>(type: "int", nullable: false),
                    Type = table.Column<int>(type: "int", nullable: false),
                    SolicitationId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DeletedAt = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Activate = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SolicitationHistories", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SolicitationHistories_Solicitations_SolicitationId",
                        column: x => x.SolicitationId,
                        principalTable: "Solicitations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_SolicitationHistories_SolicitationId",
                table: "SolicitationHistories",
                column: "SolicitationId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SolicitationHistories");
        }
    }
}
