using Accessor.Planner.Domain.Data.Repository;
using Accessor.Planner.Domain.Model;
using Accessor.Planner.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Accessor.Planner.Infrastructure.Repository
{
    public class UserRepository : Repository<User>, IUserRepository
    {
        public UserRepository(ApplicationDataContext context) : base(context) { }

        public bool EmailExist(string email)
        {
            return _context.Users.Any(value => value.Email == email);
        }

        public bool UserExist(string user)
        {
           return _context.Users.Any(value => value.UserName == user);
        }
    }
}
