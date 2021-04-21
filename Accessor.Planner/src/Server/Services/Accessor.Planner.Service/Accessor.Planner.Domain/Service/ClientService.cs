using Accessor.Planner.Domain.Data.Repository;
using Accessor.Planner.Domain.Exceptions.Service;
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
        public readonly IClientRepository _clientRepository;
        public readonly ISolicitationService _solicitationService;

        public ClientService(IClientRepository clientRepository, ISolicitationService solicitationService)
        {
            _clientRepository = clientRepository ?? throw new ArgumentNullException(nameof(clientRepository));
            _solicitationService = solicitationService ?? throw new ArgumentNullException(nameof(solicitationService));
        }

        public async Task AcceptSolicitation(Guid userId, Guid solicitationId)
        {
            var client = GetClientByUserId(userId);
            var solicitation = _solicitationService.GetById(solicitationId);

            solicitation.Accept(client.Name);
            await _clientRepository.UnitOfWork.SaveChangesAsync().ConfigureAwait(false);
        }

        public void AddAddress(Guid id, Address address)
        {
            var client = GetById(id);

            client.AddAddress(address);
            _clientRepository.UnitOfWork.SaveChanges();
        }

        public async Task ApproveSolicitation(Guid userId, Guid solicitationId)
        {
            var client = GetClientByUserId(userId);
            var solicitation = _solicitationService.GetById(solicitationId);

            solicitation.Approve();
            await _clientRepository.UnitOfWork.SaveChangesAsync().ConfigureAwait(false);
        }

        public async Task CancelSolicitation(Guid userId, Guid solicitationId)
        {
            var client = GetClientByUserId(userId);
            var solicitation = _solicitationService.GetById(solicitationId);

            solicitation.Cancel();
            await _clientRepository.UnitOfWork.SaveChangesAsync().ConfigureAwait(false);
        }

        public async Task Create(Client entity)
        {
            if (ExistCpf(entity.Cpf))
                throw new ClientServiceException("CPF already Exist");

            _clientRepository.Create(entity);
            await _clientRepository.UnitOfWork.SaveChangesAsync().ConfigureAwait(false);
        }

        public Task CreateSolicitation(Guid userId, Solicitation solicitation)
        {
            throw new NotImplementedException();
        }

        public async Task Delete(Guid id)
        {
            var client = GetById(id);

            client.Delete();
            await _clientRepository.UnitOfWork.SaveChangesAsync().ConfigureAwait(false);
        }

        public List<Client> GetAll() => _clientRepository.GetAll().ToList();


        public async Task<Client> GetByIdAsync(Guid id) => await _clientRepository.GetByIdAsync(id).ConfigureAwait(false);

        public async Task<Solicitation> GetSolicitationById(Guid id) => await _solicitationService.GetByIdAsync(id).ConfigureAwait(false);

        public List<Solicitation> GetSolicitationsByUser(Guid userId) => GetClientByUserId(userId).Solicitations;
        

        public void RemoveAddress(Guid id, Address address)
        {
            var client = GetById(id);

            client.RemoveAddress(address);
            _clientRepository.UnitOfWork.SaveChanges();
        }

        public async Task Update(Guid id, Client client)
        {
            var result = GetById(id);

            result.Update(client.BirthDate, client.Phone, client.Name);
            await _clientRepository.UnitOfWork.SaveChangesAsync().ConfigureAwait(false);
        }

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
