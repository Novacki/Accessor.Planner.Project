using Accessor.Planner.Domain.Model.Commom;
using System;
using System.Collections.Generic;
using System.Text;

namespace Accessor.Planner.Domain.Model
{
    public class Room : DefaultValues<int>
    {
        private Room() { }
        public Room(string name, double metreage, string description, List<Furniture> furnitures)
        {
            Name = name;
            Metreage = metreage;
            CreatedAt = DateTime.Now;
            UpdatedAt = DateTime.Now;
            Description = description;
            Activate = true;
            AddFurnitures(furnitures);
        }

        public string Name { get; private set; }
        public double Metreage { get; private set; }
        public string Description { get; private set; }
        public Solicitation Solicitation { get; private set; }
        public Guid SolicitationId { get; private set; }
        public  List<Furniture> Furnitures { get; private set; }

        private void AddFurnitures(List<Furniture> furnitures)
        {
            Furnitures = new List<Furniture>();
            Furnitures.AddRange(furnitures);
        }
    }
}
