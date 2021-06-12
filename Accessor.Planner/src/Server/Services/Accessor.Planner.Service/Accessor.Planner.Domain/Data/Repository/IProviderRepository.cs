using Accessor.Planner.Domain.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Accessor.Planner.Domain.Data.Repository
{
    public interface IProviderRepository : IRepository<Provider>
    {
        Task<Provider> GetByUserIdAsync(Guid id);
    }
}
