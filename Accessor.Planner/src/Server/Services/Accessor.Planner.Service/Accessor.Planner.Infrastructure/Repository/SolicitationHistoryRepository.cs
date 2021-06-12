using Accessor.Planner.Domain.Data.Repository;
using Accessor.Planner.Domain.Model;
using Accessor.Planner.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace Accessor.Planner.Infrastructure.Repository
{
    public class SolicitationHistoryRepository : Repository<SolicitationHistory>, ISolicitationHistoryRepository
    {
        public SolicitationHistoryRepository(ApplicationDataContext context) : base(context) { }
    }
}
