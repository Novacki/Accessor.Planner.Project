using System;
using System.Collections.Generic;
using System.Text;

namespace Accessor.Planner.Domain.Exceptions.Service
{
    public class UserServiceException : Exception
    {
        public UserServiceException(string message) : base(message) { }
    }
}
