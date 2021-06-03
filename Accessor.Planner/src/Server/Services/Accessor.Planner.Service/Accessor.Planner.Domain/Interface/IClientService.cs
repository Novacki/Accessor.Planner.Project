using Accessor.Planner.Domain.Model;
using Accessor.Planner.Domain.Model.Enum;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Accessor.Planner.Domain.Interface
{
    public interface IClientService : IBaseService<Client>
    {
        Task Create(Client client);
        Task Update(Guid id, string name, string phone, DateTime birthDate);
        Task Delete(Guid id);
        void RemoveAddress(Guid id, int addressId);
        void AddAddress(Guid id, Address address);
        Client GetClientByUserId(Guid id);
        Task<Client> GetClientByUserIdAsync(Guid id);
        Task<List<Client>> GetAllByType(UserType type);
    }
}
