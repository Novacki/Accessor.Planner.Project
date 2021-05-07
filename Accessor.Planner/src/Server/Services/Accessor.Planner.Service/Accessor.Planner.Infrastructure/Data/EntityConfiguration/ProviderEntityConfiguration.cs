using Accessor.Planner.Domain.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Accessor.Planner.Infrastructure.Data.EntityConfiguration
{
    public class ProviderEntityConfiguration : IEntityTypeConfiguration<Provider>
    {
        public void Configure(EntityTypeBuilder<Provider> builder)
        {
            builder.Property(provider => provider.Id)
                .ValueGeneratedOnAdd()
                .HasColumnType("uniqueidentifier");

            builder.Property("AddressId")
                .HasColumnType("int");

            builder.Property(provider => provider.Cnpj)
                .HasColumnType("nvarchar(20)");

            builder.Property(provider => provider.FantasyName)
                .HasColumnType("nvarchar(50)");

            builder.Property(provider => provider.Name)
                .HasColumnType("nvarchar(50)");

            builder.Property(provider => provider.Phone)
                .HasColumnType("nvarchar(20)");

            builder.Property(provider => provider.CreatedAt)
               .HasColumnType("datetime2")
               .IsRequired();

            builder.Property(provider => provider.UpdatedAt)
                .HasColumnType("datetime2")
                .IsRequired();

            builder.Property(provider => provider.DeletedAt)
                .HasColumnType("datetime2");

            builder.Property(provider => provider.Activate)
                .HasColumnType("bit");

            builder.Property("UserId")
                .HasColumnType("uniqueidentifier");

            builder.HasKey(provider => provider.Id);
            builder.HasIndex("AddressId");
            builder.HasIndex("UserId");
            builder.ToTable("Providers");

            builder.HasOne("Accessor.Planner.Domain.Model.Address", "Address")
                      .WithMany()
                      .HasForeignKey("AddressId");

            builder.HasOne("Accessor.Planner.Domain.Model.User", "User")
                .WithMany()
                .HasForeignKey("UserId");

            builder.Navigation(provider => provider.Address);
            builder.Navigation(provider => provider.User);
            builder.Navigation(provider => provider.Solicitations);
        }
    }
}

