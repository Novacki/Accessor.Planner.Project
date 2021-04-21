using Accessor.Planner.Domain.Data.Repository;
using Accessor.Planner.Domain.Exceptions.Service;
using Accessor.Planner.Domain.Interface;
using Accessor.Planner.Domain.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Accessor.Planner.Domain.Service
{
    public class SolicitationService : ISolicitationService
    {
        private readonly ISolicitationRepository _solicitationRepository;

        public SolicitationService(ISolicitationRepository solicitationRepository)
        {
            _solicitationRepository = solicitationRepository ?? throw new ArgumentNullException(nameof(solicitationRepository));
        }

        public async Task Create(Solicitation solicitation)
        {
            await _solicitationRepository.CreateAsync(solicitation).ConfigureAwait(false);
            _solicitationRepository.UnitOfWork.SaveChanges();
        }

        public async Task Cancel(Guid id)
        {
            var solicitation = _solicitationRepository.GetById(id);

            if (solicitation == null)
                throw new SolicitationServiceException("Not Found");


            solicitation.Cancel();

            await _solicitationRepository.UnitOfWork.SaveChangesAsync().ConfigureAwait(false);
        }

        public List<Solicitation> GetAll() => _solicitationRepository.GetAll().ToList();

        public async Task<Solicitation> GetByIdAsync(Guid id) => await _solicitationRepository.GetByIdAsync(id).ConfigureAwait(false);

        public Solicitation GetById(Guid id) 
        {
            var solicitation = _solicitationRepository.GetById(id);

            if (solicitation == null)
                throw new SolicitationServiceException("Solicitation Not Found");

            return solicitation;
        } 
        
    }
}
