using Accessor.Planner.Domain.Model;
using System;
using System.Collections.Generic;
using System.Text;
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
        Task CreateSolicitation(Guid userId, List<Room> rooms);
        Task AcceptSolicitation(Guid userId, Guid solicitationId);
        Task SendSolicitation(Guid userId, Guid solicitationId);
        Task ApproveSolicitation(Guid userId, Guid solicitationId);
        Task RejectSolicitation(Guid userId, Guid solicitationId, string reason);
        Task CancelSolicitation(Guid userId, Guid solicitationId);

    }
}
