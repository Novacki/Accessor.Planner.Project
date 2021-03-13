using Accessor.Planner.Domain.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Accessor.Planner.Infrastructure.Data.EntityConfiguration
{
    public class ClientEntityConfiguration : IEntityTypeConfiguration<Client>
    {
        public void Configure(EntityTypeBuilder<Client> builder)
        {
            builder.Property(client => client.Id)
                .ValueGeneratedOnAdd()
                .HasColumnType("uniqueidentifier");

            builder.Property(client => client.Age)
                .HasColumnType("int");

            builder.Property(client => client.Cpf)
                .HasColumnType("nvarchar(20)");

            builder.Property(client => client.Phone)
                .HasColumnType("nvarchar(20)");

            builder.Property(client => client.Sex)
                .IsRequired()
                .HasColumnType("nvarchar(1)");

            builder.Property(client => client.Type)
                .HasColumnType("int");

            builder.Property<Guid?>("UserId")
                .HasColumnType("uniqueidentifier");

            builder.Property(client => client.CreatedAt)
                .HasColumnType("datetime2")
                .IsRequired();

            builder.Property(client => client.UpdatedAt)
                .HasColumnType("datetime2")
                .IsRequired();

            builder.Property(client => client.DeletedAt)
                .HasColumnType("datetime2");

            builder.Property(client => client.Activate)
                .HasColumnType("bit");

            builder.HasKey(client => client.Id);
            builder.HasIndex("UserId");
            builder.ToTable("Clients");

            
            builder.HasOne("Accessor.Planner.Domain.Model.User", "User")
                .WithMany()
                .HasForeignKey("UserId");

            builder.Navigation(client => client.User);
            builder.Navigation(client => client.Addresses);
            builder.Navigation(client => client.Solicitations);

        }
    }
}

