using Accessor.Planner.Domain.Data.Repository;
using Accessor.Planner.Domain.Model;
using Accessor.Planner.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Accessor.Planner.Infrastructure.Repository
{
    public class ProviderRepository : Repository<Provider>, IProviderRepository
    {
        public ProviderRepository(ApplicationDataContext context) : base(context) { }

        public override IQueryable<Provider> GetAll() => base.GetAll().Include(provider => provider.Address).Include(provider => provider.User);

        public async Task<Provider> GetByUserIdAsync(Guid id) => await _entities.Where(p => p.User.Id == id).Include(provider => provider.Address).FirstOrDefaultAsync().ConfigureAwait(false);

        public override async Task<Provider> GetByIdAsync(Guid id) => await _entities.Where(provider => provider.Id == id).Include(provider => provider.User)
            .Include(provider => provider.Address).FirstOrDefaultAsync();

    }
}