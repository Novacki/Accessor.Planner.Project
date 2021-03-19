using Accessor.Planner.Domain.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Accessor.Planner.Domain.Interface {
    public interface IProviderService 
    {  
        Task Create(Provider provider);
        Task Update(Guid id, Provider provider);
        Task<Provider> GetUserByIdAsync(Guid id);
        List<Provider> GetAll();
        Task Delete(Guid id);
    }
}
