using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Accessor.Planner.Domain.Interface
{
    public interface IBaseService<T>
    {
        Task Create(T entity);
        Task<T> GetByIdAsync(Guid id);
        List<T> GetAll();
    }
}
