using Accessor.Planner.Domain.Model.Commom;
using System;
using System.Collections.Generic;
using System.Text;

namespace Accessor.Planner.Domain.Model
{
    public class Furniture : DefaultValues<int>
    {
       private Furniture() { }

        public Furniture(string name, double width, double height, double length, string description)
        {
            Name = name;
            Width = width;
            Height = height;
            Length = length;
            Description = description;
            CreatedAt = DateTime.Now;
            UpdatedAt = DateTime.Now;
            Activate = true;
        }

        public string Name { get; private set; }
        public double Width { get; private set; }
        public double Height { get; private set; }
        public double Length { get; private set; }
        public string Description { get; private set; }
        public Room Room { get; private set; }
        public int RoomId { get; set; }

    }
}
