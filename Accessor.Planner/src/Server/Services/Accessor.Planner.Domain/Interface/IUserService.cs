using Accessor.Planner.Domain.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Accessor.Planner.Domain.Interface
{
    public interface IUserService
    {
        Task Create(User user);
        Task Update(Guid id, User user);
        Task<User> GetUserByIdAsync(Guid id);
        List<User> GetAll();
        Task Delete(Guid id);
    }
}
