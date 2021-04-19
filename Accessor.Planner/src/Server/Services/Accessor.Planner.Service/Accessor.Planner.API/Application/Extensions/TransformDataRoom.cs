using Accessor.Planner.API.Application.Model.ViewModel;
using Accessor.Planner.Domain.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Accessor.Planner.API.Application.Extensions
{
    public static class TransformDataRoom
    {
        public static RoomViewModel ToViewModel(this Room room)
        {
            return new RoomViewModel()
            {
                Name = room.Name,
                Metreage = room.Metreage
            };
        }

        public static List<RoomViewModel> ToViewModel(this List<Room> rooms)
        {
            return rooms.Select(r => new RoomViewModel()
            {
                Name = r.Name,
                Metreage = r.Metreage
            }).ToList(); 
        }
    }
}
