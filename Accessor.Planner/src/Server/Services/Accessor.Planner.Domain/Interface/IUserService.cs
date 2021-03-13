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
        Task Update(User user);
        Task<List<User>> GetUserByIdAsync(Guid id);
        List<User> GetAll();
        void Delete(Guid id);
    }
}
