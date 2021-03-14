using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http.Filters;

namespace Accessor.Planner.Domain.Exceptions.Service
{
    public class UserServiceException : Exception
    {
        public UserServiceException(string message) : base(message) { }
    }

}
