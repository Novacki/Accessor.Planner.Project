using Accessor.Planner.Domain.Data.Repository;
using Accessor.Planner.Domain.Exceptions.Service;
using Accessor.Planner.Domain.IntegrationRequest;
using Accessor.Planner.Domain.Interface;
using Accessor.Planner.Domain.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace Accessor.Planner.Domain.Service
{
    public class ClientService : IClientService
    {
        private readonly IClientRepository _clientRepository;
        private readonly ISolicitationService _solicitationService;
        private readonly IUserService _userService;
        private readonly IIntegrationService _integrationService;

        public ClientService(IClientRepository clientRepository, ISolicitationService solicitationService, IUserService userService, IIntegrationService integrationService)
        {
            _clientRepository = clientRepository ?? throw new ArgumentNullException(nameof(clientRepository));
            _solicitationService = solicitationService ?? throw new ArgumentNullException(nameof(solicitationService));
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

        public async Task Update(Guid id, string name, string phone, DateTime birthDate)
        {
            var result = GetById(id);

            result.Update(name, phone, birthDate);
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

        public async Task CreateSolicitation(Guid userId, List<Room> rooms)
        {
            var client = GetClientByUserId(userId);
            var solicitation = _solicitationService.CreateSolicitation(new Solicitation(client, rooms));
            client.AddSolicitation(solicitation);

            await _clientRepository.UnitOfWork.SaveChangesAsync().ConfigureAwait(false);

        }

        public async Task AcceptSolicitation(Guid userId, Guid solicitationId)
        {
            var client = GetClientByUserId(userId);
            var solicitation = _solicitationService.GetById(solicitationId);

            solicitation.AcessorAccept(client.Id, client.Type);
            await _clientRepository.UnitOfWork.SaveChangesAsync().ConfigureAwait(false);
        }

        public async Task SendSolicitation(Guid userId, Guid solicitationId)
        {
            var client = GetClientByUserId(userId);
            _solicitationService.Send(solicitationId);
            await _clientRepository.UnitOfWork.SaveChangesAsync().ConfigureAwait(false);
        }

        public async Task ApproveSolicitation(Guid userId, Guid solicitationId)
        {
            var client = GetClientByUserId(userId);
            var solicitation = _solicitationService.GetById(solicitationId);

            solicitation.Approve();
            await _clientRepository.UnitOfWork.SaveChangesAsync().ConfigureAwait(false);
        }

        public async Task RejectSolicitation(Guid userId, Guid solicitationId, string reason)
        {
            var client = GetClientByUserId(userId);
            var solicitation = _solicitationService.GetById(solicitationId);

            solicitation.Reject(reason);
            await _clientRepository.UnitOfWork.SaveChangesAsync().ConfigureAwait(false);
        }

        public async Task CancelSolicitation(Guid userId, Guid solicitationId)
        {
            var client = GetClientByUserId(userId);
            var solicitation = _solicitationService.GetById(solicitationId);

            solicitation.Cancel();
            await _clientRepository.UnitOfWork.SaveChangesAsync().ConfigureAwait(false);
        }

        public List<Client> GetAll() => _clientRepository.GetAll().ToList();

        public async Task<Client> GetByIdAsync(Guid id) => await _clientRepository.GetByIdAsync(id).ConfigureAwait(false);

        private bool ExistCpf(string cpf) => _clientRepository.ExistCpf(cpf);
        private Client GetById(Guid id)
        {
            var client = _clientRepository.GetById(id);

            if (client == null)
                throw new ClientServiceException("Client Not Found");

            return client;
        }

        private Client GetClientByUserId(Guid id)
        {
            var client = GetAll().Where(c => c.User.Id == id).FirstOrDefault();

            if(client == null)
                throw new ClientServiceException("Client Not Found");

            return client;
        }

       
    }
}
