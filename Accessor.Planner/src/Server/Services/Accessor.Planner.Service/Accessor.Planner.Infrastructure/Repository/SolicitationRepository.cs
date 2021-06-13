using Accessor.Planner.Domain.Data.Repository;
using Accessor.Planner.Domain.Model;
using Accessor.Planner.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Accessor.Planner.Infrastructure.Repository
{
    public class SolicitationRepository : Repository<Solicitation>, ISolicitationRepository
    {
        public SolicitationRepository(ApplicationDataContext context) : base(context) { }


        public override IQueryable<Solicitation> GetAll()
        {
            return base.GetAll()
                .Include(s => s.Provider.User)
                .Include(s => s.Provider)
                .ThenInclude(p => p.Address)
                .Include(s => s.Client.User)
                .Include(s => s.Client)
                .ThenInclude(c => c.Addresses)
                .Include(s => s.Rooms)
                .ThenInclude(r => r.Furnitures)
                .Include(s => s.SolicitationHistories.OrderBy(s => s.CreatedAt));
        }

        public override async Task<Solicitation> GetByIdAsync(Guid id)
        {
            return await _entities.Include(s => s.Provider).ThenInclude(p => p.Address).Include(s => s.Client).Include(s => s.Client.Addresses)
                .Include(s => s.Rooms).ThenInclude(r => r.Furnitures).Include(s => s.SolicitationHistories).FirstOrDefaultAsync(s => s.Id == id);
        }

        public override Solicitation GetById(Guid id)
        {
            return  _entities.Include(s => s.Provider).ThenInclude(p => p.Address).Include(s => s.Client)
               .Include(s => s.Rooms).ThenInclude(r => r.Furnitures).Include(s => s.SolicitationHistories).FirstOrDefault(s => s.Id == id);
        }

        public async  Task<List<Solicitation>> GetByUserAsync(Guid id)
        {
            return await _entities.Where(s => s.Client.User.Id == id).Include(s => s.Rooms).ThenInclude(r => r.Furnitures).Include(s => s.SolicitationHistories)
                .Include(s => s.Provider).ThenInclude(p => p.Address).Include(s => s.Client).Include(s => s.Client.Addresses).ToListAsync();
        }


       
    }
}
