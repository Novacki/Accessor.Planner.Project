using System;
using System.Collections.Generic;
using System.Text;

namespace Accessor.Planner.Domain.Exceptions.Service
{
    class ClientServiceException : Exception
    {
        public ClientServiceException(string message): base(message) { }
    }
}
