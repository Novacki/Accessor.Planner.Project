using Accessor.Planner.Domain.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Accessor.Planner.Infrastructure.Data.EntityConfiguration
{
    class SolicitationHistoryConfiguration : IEntityTypeConfiguration<SolicitationHistory>
    {
        public void Configure(EntityTypeBuilder<SolicitationHistory> builder)
        {
            builder.Property(solicitationHistory => solicitationHistory.Id)
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

            builder.Property(solicitationHistory => solicitationHistory.Reason)
                .HasColumnType("nvarchar(max)");

            builder.Property(solicitationHistory => solicitationHistory.AcessorId)
                .HasColumnType("uniqueidentifier");

            builder.Property(solicitationHistory => solicitationHistory.Activate)
                .HasColumnType("bit");

            builder.Property(solicitationHistory => solicitationHistory.CreatedAt)
                .HasColumnType("datetime2");

            builder.Property(solicitationHistory => solicitationHistory.DeletedAt)
                .HasColumnType("datetime2");

            builder.Property(solicitationHistory => solicitationHistory.ProviderId)
                .HasColumnType("uniqueidentifier");

            builder.Property(solicitationHistory => solicitationHistory.SolicitationId)
                .HasColumnType("uniqueidentifier");

            builder.Property(solicitationHistory => solicitationHistory.Status)
                .HasColumnType("int");

            builder.Property(solicitationHistory => solicitationHistory.Type)
                .HasColumnType("int");

            builder.Property(solicitationHistory => solicitationHistory.UpdatedAt)
                .HasColumnType("datetime2");

            builder.Property(solicitationHistory => solicitationHistory.Value)
                .HasColumnType("float");

            builder.HasKey(solicitationHistory => solicitationHistory.Id);
            builder.HasIndex(solicitationHistory => solicitationHistory.SolicitationId);

            builder.ToTable("SolicitationHistories");

            builder.HasOne("Accessor.Planner.Domain.Model.Solicitation", "Solicitation")
                       .WithMany("SolicitationHistories")
                       .HasForeignKey("SolicitationId")
                       .OnDelete(DeleteBehavior.Cascade)
                       .IsRequired();

            builder.Navigation(solicitationHistory => solicitationHistory.Solicitation);
        }
    }
}
