using Accessor.Planner.Domain.Data.Repository;
using Accessor.Planner.Domain.Exceptions.Service;
using Accessor.Planner.Domain.Interface;
using Accessor.Planner.Domain.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Accessor.Planner.Domain.Service {
    public class ProviderService : IProviderService {
        private readonly IProviderRepository _providerRepository;

        public ProviderService(IProviderRepository providerRepository) {
            _providerRepository = providerRepository ?? throw new ArgumentNullException(nameof(providerRepository));
        }
        public async Task Create(Provider provider) {
            _providerRepository.Create(provider);
            await _providerRepository.UnitOfWork.SaveChangesAsync().ConfigureAwait(false);
        }

        public async Task Delete(Guid id) {
            var provider = _providerRepository.GetById(id);

            if (provider == null)
                throw new ProviderServiceException("Provider Not Found");

            provider.Delete();
            await _providerRepository.UnitOfWork.SaveChangesAsync().ConfigureAwait(false);
        }

        public List<Provider> GetAll() => _providerRepository.GetAll().ToList();

        public async Task<Provider> GetUserByIdAsync(Guid id) => await _providerRepository.GetByIdAsync(id).ConfigureAwait(false);

        public async Task Update(Guid id, Provider provider) {
            var result = _providerRepository.GetById(id);

            if (result == null)
                throw new ProviderServiceException("Provider Not Found");

            result.Update(provider.Name, provider.FantasyName, provider.Phone);
            await _providerRepository.UnitOfWork.SaveChangesAsync().ConfigureAwait(false);
        }
    }
}