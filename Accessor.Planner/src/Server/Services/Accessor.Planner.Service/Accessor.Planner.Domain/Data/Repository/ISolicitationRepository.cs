using Accessor.Planner.Domain.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Accessor.Planner.Domain.Data.Repository
{
    public interface ISolicitationRepository : IRepository<Solicitation>
    {
        Task<List<Solicitation>> GetByUserAsync(Guid id);
    }
}
