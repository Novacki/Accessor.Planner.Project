using IdentityServer.API.Infrastructure.Model;
using IdentityServer.API.Infrastructure.Model.Enum;
using Proxy;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

//TODO: will be refactored

namespace IdentityServer.API.Application.Integration
{
    public interface IUserIntegrationProxyService
    {
        void Send(User user);
    }
    public class UserIntegrationProxyService : IUserIntegrationProxyService
    {
        private readonly IProxyApplication _proxyApplication;

        public UserIntegrationProxyService(IProxyApplication proxyApplication) => _proxyApplication = proxyApplication;
        public void Send(User user)
        {
            _proxyApplication.Request(new UserRequest { Id = user.Id, UserName = user.UserName, Email = user.Email, Type = user.Type, Password = "TESTE" }, "api/v1/Users");
        }
    }
}

public class UserRequest {
    public Guid Id { get; set; }
    public string UserName { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public  UserType Type { get; set; }
}