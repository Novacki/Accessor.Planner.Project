using Accessor.Planner.Domain.Data.Repository;
using Accessor.Planner.Domain.Model;
using Accessor.Planner.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
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

        public bool EmailExist(string email) => _entities.Any(value => value.Email == email);
        

        public bool UserExist(string user) =>  _entities.Any(value => value.UserName == user);

        public async Task<User> Login(string email, string password) => await _entities.Where(user => user.Email == email && user.Password == password).FirstOrDefaultAsync();
    }
}
