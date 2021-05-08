using Accessor.Planner.Domain.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Accessor.Planner.Domain.IntegrationRequest
{
    public class UserIntegrationRequest
    {
        public UserIntegrationRequest(Client client)
        {
            Id = client.User.Id;
            Email = client.User.Email;
            FirstName = client.Name.Split(" ").FirstOrDefault();
            LastName = client.Name.Split(" ").LastOrDefault();
            Password = client.User.Password;
        }

        public UserIntegrationRequest(Provider provider)
        {
            Id = provider.User.Id;
            Email = provider.User.Email;
            FirstName = provider.SocialReason.Split(" ").FirstOrDefault();
            LastName = provider.SocialReason.Split(" ").LastOrDefault();
            Password = provider.User.Password;
        }

        public Guid Id { get; set; }
        public string Email { get; private set; }

        public string FirstName { get; private set; }

        public string LastName { get; private set; }

        public string Password { get; private set; }
    }
}
