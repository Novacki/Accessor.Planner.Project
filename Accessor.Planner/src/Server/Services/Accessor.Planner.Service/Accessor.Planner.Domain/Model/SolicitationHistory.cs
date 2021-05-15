using Accessor.Planner.Domain.Model.Commom;
using Accessor.Planner.Domain.Model.Enum;
using System;
using System.Collections.Generic;
using System.Text;

namespace Accessor.Planner.Domain.Model
{
    public class SolicitationHistory: DefaultValues<Guid>
    {
        private SolicitationHistory() { }
        public SolicitationHistory(Solicitation solicitation, double value,  SubscribeType type)
        {
            Id = Guid.NewGuid();
            AcessorId = solicitation.AccessorId;
            ProviderId = solicitation.ProviderId;
            Solicitation = solicitation;
            Value = value;
            Status = solicitation.Status;
            Type = type;
            CreatedAt = DateTime.Now;
            UpdatedAt = DateTime.Now;
            Activate = true;
        }

        public SolicitationHistory(Solicitation solicitation, SubscribeType type)
        {
            Id = Guid.NewGuid();
            AcessorId = solicitation.AccessorId;
            ProviderId = solicitation.ProviderId;
            Solicitation = solicitation;
            Status = solicitation.Status;
            Type = type;
            CreatedAt = DateTime.Now;
            UpdatedAt = DateTime.Now;
            Activate = true;
        }

        public Guid? AcessorId { get; private set; }
        public Guid? ProviderId { get; private set; }
        public double? Value { get; private set; }
        public StatusSolicitation Status { get; private set; }
        public SubscribeType Type { get; private set; }
        public Solicitation Solicitation { get; private set; }
        public Guid SolicitationId { get; private set; }
    }
}
