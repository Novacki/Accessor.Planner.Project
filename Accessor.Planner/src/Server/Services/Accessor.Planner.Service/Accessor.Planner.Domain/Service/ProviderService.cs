using Accessor.Planner.Domain.Data.Repository;
using Accessor.Planner.Domain.Exceptions.Service;
using Accessor.Planner.Domain.IntegrationRequest;
using Accessor.Planner.Domain.Interface;
using Accessor.Planner.Domain.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Accessor.Planner.Domain.Service
{
    public class ProviderService : IProviderService
    {
        private readonly IProviderRepository _providerRepository;
        private readonly ISolicitationService _solicitationService;
        private readonly IIntegrationService _integrationService;
        public ProviderService(IProviderRepository providerRepository, ISolicitationService solicitationService, IIntegrationService integrationService)
        {
            _providerRepository = providerRepository ?? throw new ArgumentNullException(nameof(providerRepository));
            _solicitationService = solicitationService ?? throw new ArgumentNullException(nameof(solicitationService));
            _integrationService = integrationService ?? throw new ArgumentNullException(nameof(solicitationService));
        }

        public async Task AcceptSolicitation(Guid userId, Guid solicitationId)
        {
            var provider = GetProviderByUserId(userId);
            var solicitation = _solicitationService.GetById(solicitationId);

            solicitation.ProviderAccept(provider);
            await _providerRepository.UnitOfWork.SaveChangesAsync().ConfigureAwait(false);
        }

        public async Task Create(Provider provider)
        {
            _providerRepository.Create(provider);
            await _integrationService.Send(new UserIntegrationRequest(provider), "Auth/signup").ConfigureAwait(false);
            await _providerRepository.UnitOfWork.SaveChangesAsync().ConfigureAwait(false);
        }

        public async Task Delete(Guid id)
        {
            var provider = _providerRepository.GetById(id);

            if (provider == null)
                throw new ProviderServiceException("Provider Not Found");

            provider.Delete();
            await _providerRepository.UnitOfWork.SaveChangesAsync().ConfigureAwait(false);
        }

        public List<Provider> GetAll() => _providerRepository.GetAll().ToList();

     
        public async Task<Provider> GetByIdAsync(Guid id) => await _providerRepository.GetByIdAsync(id).ConfigureAwait(false);

        public async Task<Provider> GetByUserId(Guid id) => await  _providerRepository.GetByUserId(id).ConfigureAwait(false);
        
        public Task SendSolicitation(Guid userId, Guid solicitationId)
        {
            throw new NotImplementedException();
        }

        public async Task Update(Guid id, Provider provider)
        {
            var result = _providerRepository.GetById(id);

            if (result == null)
                throw new ProviderServiceException("Provider Not Found");

            result.Update(provider.SocialReason, provider.FantasyName, provider.Phone);
            await _providerRepository.UnitOfWork.SaveChangesAsync().ConfigureAwait(false);
        }


        private Provider GetProviderByUserId(Guid id)
        {
            var provider = GetAll().Where(c => c.User.Id == id).FirstOrDefault();

            if (provider == null)
                throw new ProviderServiceException("Provider Not Found");

            return provider;
        }
    }
}