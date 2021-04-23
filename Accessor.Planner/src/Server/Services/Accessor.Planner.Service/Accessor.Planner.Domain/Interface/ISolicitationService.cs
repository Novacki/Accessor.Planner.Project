using Accessor.Planner.Domain.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Accessor.Planner.Domain.Interface
{
    public interface ISolicitationService : IBaseService<Solicitation>
    {
        public Task Cancel(Guid id);

        public Solicitation GetById(Guid id);
        public void Accept(Client client, Guid solicitationId);
        public void Send(Guid id);
    }
}
