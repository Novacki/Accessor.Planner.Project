using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Accessor.Planner.Domain.Data.Repository
{
    public interface IRepository<T> where T : class
    {
        IQueryable<T> GetAll();
        T GetById(Guid id);
        Task<T> GetByIdAsync(Guid id);
        Task CreateAsync(T entity);
        void Create(T entity);
        void Update(T entity);
        public IUnitOfWork UnitOfWork { get; }
    }
}
