using System;
using System.Collections.Generic;
using System.Text;

namespace Accessor.Planner.Domain.Exceptions.Service
{
    class IntegrationServiceException : Exception
    {
        public IntegrationServiceException(string message) : base(message) { }
    }
}
