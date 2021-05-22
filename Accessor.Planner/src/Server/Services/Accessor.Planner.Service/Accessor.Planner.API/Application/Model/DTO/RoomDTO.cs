using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Accessor.Planner.API.Application.Model.DTO
{
    public class RoomDTO
    {
        public string Name { get; set; }
        public double Metreage { get; set; }
        public string Description { get; set; }
        public List<FurnitureDTO> Furnitures  { get; set; }
    }
}
