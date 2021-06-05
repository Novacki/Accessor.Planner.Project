using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Accessor.Planner.API.Application.Model.ViewModel
{
    public class SolicitationViewModel
    {
        public Guid Id { get; set; }
        public Guid? AccessorId { get; set; }
        public int Status { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public FullDataProviderViewModel Provider { get; set; }
        public FullDataClientViewModel Client { get; set; }
        public List<RoomViewModel> Rooms { get; set; }

    }
}
