using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Accessor.Planner.API.Application.Model.ViewModel
{
    public class RoomViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Metreage { get; set; }
        public string Description { get; set; }
        public List<FurnitureViewModel> Furnitures { get; set; }
    }
}
