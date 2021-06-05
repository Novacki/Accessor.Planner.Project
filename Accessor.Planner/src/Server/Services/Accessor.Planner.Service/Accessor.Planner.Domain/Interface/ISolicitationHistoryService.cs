using Accessor.Planner.Domain.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Accessor.Planner.Domain.Interface
{
    public interface ISolicitationHistoryService : IBaseService<SolicitationHistory>
    {
        Task Create(SolicitationHistory solicitationHistory);
    }
}
