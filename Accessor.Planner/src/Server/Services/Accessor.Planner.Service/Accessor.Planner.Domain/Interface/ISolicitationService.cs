using Accessor.Planner.Domain.Model;
using Accessor.Planner.Domain.Model.Enum;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Accessor.Planner.Domain.Interface
{
    public interface ISolicitationService : IBaseService<Solicitation>
    {
        Task Create(Guid userId, List<Room> rooms);
        Solicitation GetById(Guid id);
        Task<List<Solicitation>> GetSolicitationsByUserAsync(Guid userId);
        List<Solicitation> GetSolicitationsByFilter(Guid profileContextId, StatusSolicitation status, UserType? userType);
        Task AccessorAccept(Guid userId, Guid solicitationId);
        Task ProviderAccept(Guid userId, Guid solicitationId);
        Task AccessorSend(Guid userId, Guid solicitationId);
        Task ProviderSend(Guid userId, Guid solicitationId, double value, DateTime solicitationEndDate);
        Task Approve(Guid userId, Guid solicitationId, double value, DateTime solicitationEndDate);
        Task Reject(Guid userId, Guid solicitationId, string reason, double value, DateTime solicitationEndDate);
        Task Done(Guid userId, Guid solicitationId, double value);
        Task Cancel(Guid userId, Guid solicitationId, string reason);

    }
}
