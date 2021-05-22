using Accessor.Planner.API.Application.Model.DTO;
using Accessor.Planner.API.Application.Model.ViewModel;
using Accessor.Planner.Domain.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Accessor.Planner.API.Application.Extensions
{
    public static class TransformDataFurniture
    {
        public static Furniture ToFurniture(this FurnitureDTO furniture)
        {
            return new Furniture(furniture.Name, furniture.Width, furniture.Height, furniture.Length, furniture.Description);
        }

        public static List<Furniture> ToFurniture(this List<FurnitureDTO> furnitures)
        {
            return furnitures.Select(f => new Furniture(f.Name, f.Width, f.Height, f.Length, f.Description)).ToList();
        }

        public static FurnitureViewModel ToViewModel(this Furniture furniture)
        {
            return new FurnitureViewModel()
            {
                Name = furniture.Name,
                Width = furniture.Width,
                Height = furniture.Height,
                Length = furniture.Length,
                Description = furniture.Description
            };
        }

        public static List<FurnitureViewModel> ToViewModel(this List<Furniture> furniture)
        {
            return furniture.Select(f => new FurnitureViewModel() 
            { 
                Name = f.Name,
                Width = f.Width,
                Height = f.Height,
                Length = f.Length,
                Description = f.Description

            }).ToList();
        }

    }
}
