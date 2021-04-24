using Accessor.Planner.Domain.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Accessor.Planner.Domain.Interface
{
    public interface IUserService : IBaseService<User>
    {
        Task<User> Login(string email, string password);
        Task Update(Guid id, User entity);
        Task Delete(Guid id);

    }
}
