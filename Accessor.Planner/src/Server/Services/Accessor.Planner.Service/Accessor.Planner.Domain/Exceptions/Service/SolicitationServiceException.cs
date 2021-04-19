using System;
using System.Collections.Generic;
using System.Text;

namespace Accessor.Planner.Domain.Exceptions.Service
{
    class SolicitationServiceException : Exception
    {
        public SolicitationServiceException(string message) : base(message) { }
    }
}
