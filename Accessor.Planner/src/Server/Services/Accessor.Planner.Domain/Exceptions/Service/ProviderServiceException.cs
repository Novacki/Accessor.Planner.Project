using System;
using System.Collections.Generic;
using System.Text;

namespace Accessor.Planner.Domain.Exceptions.Service {
    public class ProviderServiceException : Exception {
        public ProviderServiceException(string message) : base(message) { }
    }
}