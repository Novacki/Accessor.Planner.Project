using IdentityServer.API.Infrastructure.Model;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IdentityServer.API.Infrastructure.Data
{
    public class ApplicationDataContext : IdentityDbContext<User, Role, Guid>
    {
        public ApplicationDataContext(DbContextOptions<ApplicationDataContext> options): base(options) { }
    }
}
