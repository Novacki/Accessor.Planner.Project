using Accessor.Planner.Domain.Exceptions.Service;
using Accessor.Planner.Domain.Interface;
using Proxy;
using System;
using System.Collections.Generic;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace Accessor.Planner.Domain.Service
{
    public class IntegrationService : IIntegrationService
    {
        private readonly IProxyApplication _proxyApplication;

        public IntegrationService(IProxyApplication proxyApplication)
        {
            _proxyApplication = proxyApplication ?? throw new ArgumentNullException(nameof(proxyApplication));
        }

        public async Task Send<T>(T value, string route)
        {
            if (value == null)
                throw new IntegrationServiceException("Value is Null");

            var response = await _proxyApplication.Request(value, route).ConfigureAwait(false);

            if(response.StatusCode == HttpStatusCode.InternalServerError)
                throw new IntegrationServiceException("Error in Request");

        }
    }
}
