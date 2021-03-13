using Accessor.Planner.Domain.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Accessor.Planner.Infrastructure.Data.EntityConfiguration
{
    class SolicitationEntityConfiguration : IEntityTypeConfiguration<Solicitation>
    {
        public void Configure(EntityTypeBuilder<Solicitation> builder)
        {
            builder.Property(solicitation => solicitation.Id)
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

            builder.Property(solicitation => solicitation.AcessorId)
                .HasColumnType("uniqueidentifier");

            builder.Property(solicitation => solicitation.ClientId)
                .HasColumnType("uniqueidentifier");

            builder.Property(solicitation => solicitation.ProviderId)
                .HasColumnType("uniqueidentifier");

            builder.Property(solicitation => solicitation.SolicitationEndDate)
                .HasColumnType("datetime2");

            builder.Property(solicitation => solicitation.Status)
                .HasColumnType("int");

            builder.Property(solicitation => solicitation.CreatedAt)
               .HasColumnType("datetime2")
               .IsRequired();

            builder.Property(solicitation => solicitation.UpdatedAt)
                .HasColumnType("datetime2")
                .IsRequired();

            builder.Property(solicitation => solicitation.DeletedAt)
                .HasColumnType("datetime2");

            builder.Property(solicitation => solicitation.Activate)
                .HasColumnType("bit");

            builder.HasKey(solicitation => solicitation.Id);
            builder.HasIndex(solicitation => solicitation.ClientId);
            builder.HasIndex(solicitation => solicitation.ProviderId);
            builder.ToTable("Solicitations");

            builder.HasOne("Accessor.Planner.Domain.Model.Client", "Client")
                        .WithMany("Solicitations")
                        .HasForeignKey("ClientId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

            builder.HasOne("Accessor.Planner.Domain.Model.Provider", "Provider")
                .WithMany("Solicitations")
                .HasForeignKey("ProviderId");

            builder.Navigation(solicitation => solicitation.Client);
            builder.Navigation(solicitation => solicitation.Provider);
            builder.Navigation(solicitation => solicitation.Rooms);
        }
    }
}
