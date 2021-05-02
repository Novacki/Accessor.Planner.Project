using IdentityServer.API.Infrastructure.Model.Enum;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IdentityServer.API.Infrastructure.Model
{
    public class User : IdentityUser<Guid>
    {
        public string FirstName { get; set; }

        public string LastName { get;  set; }

        public UserType Type { get; set; }
    }
}
