using Accessor.Planner.Domain.Data.Repository;
using Accessor.Planner.Domain.Model;
using Accessor.Planner.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Accessor.Planner.Infrastructure.Repository
{
    public class SolicitationRepository : Repository<Solicitation>, ISolicitationRepository
    {
        public SolicitationRepository(ApplicationDataContext context) : base(context) { }


        public override IQueryable<Solicitation> GetAll()
        {
            return base.GetAll()
                .Include(s => s.Provider)
                .Include(s => s.Client)
                .Include(s => s.Rooms);
        }
    }
}
