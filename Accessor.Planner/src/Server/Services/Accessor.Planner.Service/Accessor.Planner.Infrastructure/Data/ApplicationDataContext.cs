using Accessor.Planner.Domain.Data;
using Accessor.Planner.Domain.Model;
using Accessor.Planner.Infrastructure.Data.EntityConfiguration;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Accessor.Planner.Infrastructure.Data
{
    public class ApplicationDataContext : DbContext, IUnitOfWork
    {
        public ApplicationDataContext(DbContextOptions<ApplicationDataContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Solicitation> Solicitations { get; set; }
        public DbSet<Room> Rooms { get; set; }
        public DbSet<Provider> Providers { get; set; }
        public DbSet<Address> Addresses { get; set; }
        public DbSet<Client> Clients { get; set; }
        public DbSet<SolicitationHistory> SolicitationHistories { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new UserEntityConfiguration());
            modelBuilder.ApplyConfiguration(new ProviderEntityConfiguration());
            modelBuilder.ApplyConfiguration(new SolicitationEntityConfiguration());
            modelBuilder.ApplyConfiguration(new ClientEntityConfiguration());
            modelBuilder.ApplyConfiguration(new RoomEntityConfiguration());
            modelBuilder.ApplyConfiguration(new AddressEntityConfiguration());
            modelBuilder.ApplyConfiguration(new SolicitationHistoryConfiguration());
        }
    }
}
