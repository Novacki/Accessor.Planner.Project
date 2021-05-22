using Accessor.Planner.Domain.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Accessor.Planner.Infrastructure.Data.EntityConfiguration
{
    public class FurnitureEntityConfiguration : IEntityTypeConfiguration<Furniture>
    {
        public void Configure(EntityTypeBuilder<Furniture> builder)
        {
            builder.Property(furniture => furniture.Id)
                .ValueGeneratedOnAdd()
                .HasColumnType("int")
                .UseIdentityColumn();

            builder.Property(furniture => furniture.Name)
              .HasColumnType("nvarchar(max)");

            builder.Property(furniture => furniture.Width)
              .HasColumnType("float");

            builder.Property(furniture => furniture.Height)
               .HasColumnType("float");

            builder.Property(furniture => furniture.Length)
               .HasColumnType("float");

            builder.Property(furniture => furniture.Description)
               .HasColumnType("nvarchar(max)");

            builder.Property(furniture => furniture.RoomId)
                .HasColumnType("int");

            builder.Property(furniture => furniture.CreatedAt)
                .HasColumnType("datetime2");

            builder.Property(furniture => furniture.UpdatedAt)
                .HasColumnType("datetime2");

            builder.Property(furniture => furniture.DeletedAt)
                .HasColumnType("datetime2");

            builder.Property(furniture => furniture.Activate)
              .HasColumnType("bit");

            builder.HasKey(furniture => furniture.Id);

            builder.HasIndex(furniture => furniture.RoomId);

            builder.ToTable("Furnitures");

            builder.HasOne("Accessor.Planner.Domain.Model.Room", "Room")
                       .WithMany("Furnitures")
                       .HasForeignKey("RoomId")
                       .OnDelete(DeleteBehavior.Cascade)
                       .IsRequired();

            builder.Navigation(furniture => furniture.Room);
        }
    }
}
