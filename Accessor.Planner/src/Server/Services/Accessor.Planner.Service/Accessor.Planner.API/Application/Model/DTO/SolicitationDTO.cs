using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Accessor.Planner.API.Application.Model.DTO
{
    public class SolicitationDTO
    {
        public Guid UserId { get; set; }
        public List<RoomDTO> Rooms { get; set; }
    }
}
