using Accessor.Planner.Domain.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Accessor.Planner.Domain.Data.Repository
{
    public interface IClientRepository : IRepository<Client>
    {
        public bool ExistCpf(string cpf);

    }
}
