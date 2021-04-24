using Accessor.Planner.Domain.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Accessor.Planner.Domain.Interface {
    public interface IProviderService : IBaseService<Provider>
    {
        Task Update(Guid id, Provider entity);
        Task Delete(Guid id);
        Task AcceptSolicitation(Guid userId, Guid solicitationId);
        Task SendSolicitation(Guid userId, Guid solicitationId);

    }
}
