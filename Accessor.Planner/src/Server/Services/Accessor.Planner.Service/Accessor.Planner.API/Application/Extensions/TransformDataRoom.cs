using Accessor.Planner.API.Application.Model.DTO;
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

        public static Room ToRoom(this RoomDTO room)
        {
            return new Room(room.Name, room.Metreage);
        }

        public static List<Room> ToRoom(this List<RoomDTO> rooms)
        {
            return rooms.Select(r => new Room(r.Name, r.Metreage)).ToList();
        }

        public static RoomViewModel ToViewModel(this Room room)
        {
            return new RoomViewModel()
            {
                Id = room.Id,
                Name = room.Name,
                Metreage = room.Metreage
            };
        }

        public static List<RoomViewModel> ToViewModel(this List<Room> rooms)
        {
            return rooms.Select(r => new RoomViewModel()
            {
                Id = r.Id,
                Name = r.Name,
                Metreage = r.Metreage

            }).ToList(); 
        }
    }
}
