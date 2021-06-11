using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Accessor.Planner.API.Application.Model.ViewModel
{
    public class SolicitationHistoryViewModel
    {
        public Guid? AccessorId { get; set; }
        public Guid? ProviderId { get; set; }
        public double? Value { get; set; }
        public int Status { get; set; }
        public int Type { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
