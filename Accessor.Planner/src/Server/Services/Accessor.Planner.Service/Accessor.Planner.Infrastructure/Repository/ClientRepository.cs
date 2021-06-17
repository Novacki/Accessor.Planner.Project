using Accessor.Planner.Domain.Data.Repository;
using Accessor.Planner.Domain.Model;
using Accessor.Planner.Domain.Model.Enum;
using Accessor.Planner.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Accessor.Planner.Infrastructure.Repository
{
    public class ClientRepository : Repository<Client>, IClientRepository
    {
        public ClientRepository( ApplicationDataContext context ): base(context) { }

        public override IQueryable<Client> GetAll() => base.GetAll().Include(c => c.Addresses).Include(c => c.Solicitations).Include(c => c.User);

        public async Task<List<Client>> GetAllByType(UserType type) => await _entities.Where(c => c.Type == type).Include(c => c.Addresses).Include(c => c.User).ToListAsync();
        
        public override async Task<Client> GetByIdAsync(Guid id) => await _entities.Where(c => c.Id == id).Include(c => c.Addresses).Include(c => c.User)
            .Include(c => c.Solicitations).FirstOrDefaultAsync().ConfigureAwait(false);

        public override Client GetById(Guid id) => _entities.Where(c => c.Id == id).Include(c => c.Addresses).Include(c => c.Solicitations)
            .Include(c => c.User).FirstOrDefault();

        public async Task<Client> GetByUserIdAsync(Guid id) => await _entities.Include(c => c.User).Where(c => c.User.Id == id).FirstOrDefaultAsync();

        public Client GetByUserId(Guid id) => _entities.Include(c => c.User).Where(c => c.User.Id == id).FirstOrDefault();

        public bool ExistCpf(string cpf) => _entities.Any(c => c.Cpf == cpf);

    }
}
