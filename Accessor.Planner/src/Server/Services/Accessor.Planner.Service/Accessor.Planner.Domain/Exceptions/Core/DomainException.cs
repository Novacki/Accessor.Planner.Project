using System;
using System.Collections.Generic;
using System.Text;

namespace Accessor.Planner.Domain.Exceptions.Core
{
    public class DomainException : Exception
    {
        public DomainException(string message): base(message) { }
    }
}
