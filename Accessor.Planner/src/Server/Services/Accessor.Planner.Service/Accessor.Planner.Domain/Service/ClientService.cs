using Accessor.Planner.Domain.Data.Repository;
using Accessor.Planner.Domain.Exceptions.Service;
using Accessor.Planner.Domain.IntegrationRequest;
using Accessor.Planner.Domain.Interface;
using Accessor.Planner.Domain.Model;
using Accessor.Planner.Domain.Model.Enum;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Accessor.Planner.Domain.Service
{
    public class ClientService : IClientService
    {
        private readonly IClientRepository _clientRepository;
        private readonly IUserService _userService;
        private readonly IIntegrationService _integrationService;

        public ClientService(IClientRepository clientRepository, IUserService userService, IIntegrationService integrationService)
        {
            _clientRepository = clientRepository ?? throw new ArgumentNullException(nameof(clientRepository));
            _userService = userService ?? throw new ArgumentNullException(nameof(userService));
            _integrationService = integrationService ?? throw new ArgumentNullException(nameof(integrationService));
        }


        public async Task Create(Client client)
        {
            if (ExistCpf(client.Cpf))
                throw new ClientServiceException("CPF already Exist");

            _userService.ValidateUser(client.User);

            _clientRepository.Create(client);

            await  _integrationService.Send(new UserIntegrationRequest(client), "Auth/signup").ConfigureAwait(false);

            await _clientRepository.UnitOfWork.SaveChangesAsync().ConfigureAwait(false);
        }

        public async Task Update(Guid id, string phone, Address address)
        {
            var result = GetById(id);

            result.Update(phone, address);
            await _clientRepository.UnitOfWork.SaveChangesAsync().ConfigureAwait(false);
        }

        public async Task Delete(Guid id)
        {
            var client = GetById(id);

            client.Delete();
            await _clientRepository.UnitOfWork.SaveChangesAsync().ConfigureAwait(false);
        }

        public void AddAddress(Guid id, Address address)
        {
            var client = GetById(id);

            client.AddAddress(address);
            _clientRepository.UnitOfWork.SaveChanges();
        }

        public void RemoveAddress(Guid id, int addressId)
        {
            var client = GetById(id);
            var address = client.Addresses.Where(a => a.Id == addressId).FirstOrDefault();

            if (address == null)
                throw new ClientServiceException("Address Not Found");

            client.RemoveAddress(address);
            _clientRepository.UnitOfWork.SaveChanges();
        }
        
        public List<Client> GetAll() => _clientRepository.GetAll().ToList();

        public async Task<Client> GetByIdAsync(Guid id) => await _clientRepository.GetByIdAsync(id).ConfigureAwait(false);

        public Client GetClientByUserId(Guid id)
        {
            var client = _clientRepository.GetByUserId(id);

            if (client == null)
                throw new ClientServiceException("Client Not Found");

            return client;
        }

        private bool ExistCpf(string cpf) => _clientRepository.ExistCpf(cpf);
        private Client GetById(Guid id)
        {
            var client = _clientRepository.GetById(id);

            if (client == null)
                throw new ClientServiceException("Client Not Found");

            return client;
        }

        public async Task<Client> GetClientByUserIdAsync(Guid id) => await _clientRepository.GetByUserIdAsync(id).ConfigureAwait(false);

        public async Task<List<Client>> GetAllByType(UserType type) => await _clientRepository.GetAllByType(type).ConfigureAwait(false);

    }
}
