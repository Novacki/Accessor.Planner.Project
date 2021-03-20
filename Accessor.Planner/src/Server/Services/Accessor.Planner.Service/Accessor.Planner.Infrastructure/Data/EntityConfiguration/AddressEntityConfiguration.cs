using Accessor.Planner.Domain.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Accessor.Planner.Infrastructure.Data.EntityConfiguration
{
    public class AddressEntityConfiguration : IEntityTypeConfiguration<Address>
    {
        public void Configure(EntityTypeBuilder<Address> builder)
        {
            builder.Property(address => address.Id)
            .ValueGeneratedOnAdd()
            .HasColumnType("int")
            .UseIdentityColumn();

        
            builder.Property(address => address.Cep)
            .HasColumnType("nvarchar(20)");

            builder.Property(address => address.City)
            .HasColumnType("nvarchar(50)");

            builder.Property<Guid?>("ClientId")
            .HasColumnType("uniqueidentifier");

            builder.Property(address => address.Complement)
            .HasColumnType("nvarchar(50)");

            builder.Property(address => address.Number)
            .HasColumnType("nvarchar(20)");

            builder.Property(address => address.State)
            .HasColumnType("nvarchar(30)");

            builder.Property(address => address.Street)
            .HasColumnType("nvarchar(20)");

            builder.Property(address => address.CreatedAt)
                .HasColumnType("datetime2")
                .IsRequired();

            builder.Property(address => address.UpdatedAt)
                .HasColumnType("datetime2")
                .IsRequired();

            builder.Property(address => address.DeletedAt)
                .HasColumnType("datetime2");

            builder.Property(address => address.Activate)
                .HasColumnType("bit");

            builder.HasKey(address => address.Id);
            builder.HasIndex("ClientId");
            builder.ToTable("Addresses");
          
            builder.HasOne("Accessor.Planner.Domain.Model.Client", null)
                        .WithMany("Addresses")
                        .HasForeignKey("ClientId");
        }
    }
}


