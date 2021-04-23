using Accessor.Planner.Domain.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Accessor.Planner.Domain.Interface
{
    public interface IClientService : IBaseService<Client>
    {
        Task Update(Guid id, Client entity);
        Task Delete(Guid id);
        void RemoveAddress(Guid id, Address address);
        void AddAddress(Guid id, Address address);
        Task<Solicitation> GetSolicitationById(Guid id);
        List<Solicitation> GetSolicitationsByUser(Guid userId);
        Task CreateSolicitation(Guid userId, List<Room> rooms);
        Task AcceptSolicitation(Guid userId, Guid solicitationId);
        Task SendSolicitation(Guid userId, Guid solicitationId);
        Task ApproveSolicitation(Guid userId, Guid solicitationId);
        Task RejectSolicitation(Guid userId, Guid solicitationId, string reason);
        Task CancelSolicitation(Guid userId, Guid solicitationId);

    }
}
