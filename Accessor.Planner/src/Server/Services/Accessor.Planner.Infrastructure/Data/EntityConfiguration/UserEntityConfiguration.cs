using Accessor.Planner.Domain.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Accessor.Planner.Infrastructure.Data.EntityConfiguration
{
    public class UserEntityConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.Property(user => user.Id)
                .ValueGeneratedOnAdd()
                .HasColumnType("uniqueidentifier")
                .IsRequired();
           
            builder.Property(user => user.UserName)
                .HasColumnType("nvarchar(50)")
                .IsRequired();

            builder.Property(user => user.Email)
                .HasColumnType("nvarchar(50)")
                .IsRequired();

            builder.Property(user => user.Password)
                .HasColumnType("nvarchar(50)")
                .IsRequired();

            builder.Property(user => user.CreatedAt)
                .HasColumnType("datetime2")
                .IsRequired();

            builder.Property(user => user.UpdatedAt)
                .HasColumnType("datetime2")
                .IsRequired();

            builder.Property(user => user.DeletedAt)
                .HasColumnType("datetime2");

            builder.Property(user => user.Activate)
                .HasColumnType("bit");

            builder.HasKey(user => user.Id);
            builder.ToTable("Users");
        }
    }
}

