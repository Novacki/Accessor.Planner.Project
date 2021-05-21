using Accessor.Planner.Domain.Model;
using System;
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
       
    }
}
