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

    public class SolicitationOperationDTO
    {
        public Guid UserId { get; set; }
        public Guid SolicitationId { get; set; }
    }

    public class SolicitationResponseDTO : SolicitationOperationDTO
    {
        public string Reason { get; set; }
    }

    public  class SolicitationResponseValueDTO : SolicitationOperationDTO
    {
        public double Value { get; set; }
        public DateTime SolicitationEndDate { get; set; }
    }  
}
