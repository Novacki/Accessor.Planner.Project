using Accessor.Planner.Domain.Model.Commom;
using System;
using System.Collections.Generic;
using System.Text;

namespace Accessor.Planner.Domain.Model
{
    public class Room : DefaultValues<int>
    {
        public Room(string name, double metreage)
        {
            Name = name;
            Metreage = metreage;
            CreatedAt = DateTime.Now;
            Activate = true;
        }

        public string Name { get; private set; }
        public double Metreage { get; private set; }
        public Solicitation Solicitation { get; private set; }
        public Guid SolicitationId { get; private set; }
    }
}
