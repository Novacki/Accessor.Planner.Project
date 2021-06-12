using System;
using System.Collections.Generic;
using System.Text;

namespace Accessor.Planner.Domain.Exceptions.Service
{
    public class SolicitationHistoryException : Exception 
    {
        public SolicitationHistoryException(string message): base(message) { }
    }
}
