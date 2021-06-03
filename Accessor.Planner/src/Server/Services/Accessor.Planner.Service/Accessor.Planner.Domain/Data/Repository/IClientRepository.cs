using Accessor.Planner.Domain.Model;
using Accessor.Planner.Domain.Model.Enum;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Accessor.Planner.Domain.Data.Repository
{
    public interface IClientRepository : IRepository<Client>
    {
        public bool ExistCpf(string cpf);
        public Client GetByUserId(Guid id);
        public Task<Client> GetByUserIdAsync(Guid id);
        Task<List<Client>> GetAllByType(UserType type);

    }
}
