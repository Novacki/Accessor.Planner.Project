using System;
using System.Collections.Generic;
using System.Text;

namespace Accessor.Planner.Domain.Model.Commom
{
    public abstract class DefaultValues<T> 
    {
        public T Id { get; protected set; }
        public DateTime CreatedAt { get; protected set; }
        public DateTime UpdatedAt { get; protected set; }
        public DateTime? DeletedAt { get; protected set; }
        public bool Activate { get; protected set; }
    }
}
