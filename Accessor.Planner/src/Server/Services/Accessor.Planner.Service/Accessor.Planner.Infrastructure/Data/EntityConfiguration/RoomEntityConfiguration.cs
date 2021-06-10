using Accessor.Planner.Domain.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Accessor.Planner.Infrastructure.Data.EntityConfiguration
{
    class RoomEntityConfiguration : IEntityTypeConfiguration<Room>
    {
        public void Configure(EntityTypeBuilder<Room> builder)
        {
            builder.Property(room => room.Id)
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

            builder.Property(room => room.Metreage)
                .HasColumnType("float");

            builder.Property(room => room.Name)
                .HasColumnType("nvarchar(50)");

            builder.Property(room => room.SolicitationId)
                .HasColumnType("uniqueidentifier");

            builder.Property(room => room.Description)
                .HasColumnType("nvarchar(300)");

            builder.Property(room => room.CreatedAt)
               .HasColumnType("datetime2")
               .IsRequired();

            builder.Property(room => room.UpdatedAt)
                .HasColumnType("datetime2")
                .IsRequired();

            builder.Property(room => room.DeletedAt)
                .HasColumnType("datetime2");

            builder.Property(room => room.Activate)
                .HasColumnType("bit");

            builder.HasKey(room => room.Id);
            builder.HasIndex(room => room.SolicitationId);
            builder.ToTable("Rooms");

            builder.HasOne("Accessor.Planner.Domain.Model.Solicitation", "Solicitation")
                  .WithMany("Rooms")
                  .HasForeignKey("SolicitationId")
                  .OnDelete(DeleteBehavior.Cascade)
                  .IsRequired();

            builder.Navigation(room => room.Solicitation);
        }
    }
}
