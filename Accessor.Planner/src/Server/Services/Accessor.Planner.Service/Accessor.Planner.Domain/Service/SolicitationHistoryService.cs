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
    public class SolicitationHistoryService : ISolicitationHistoryService
    {
        private readonly ISolicitationHistoryRepository _solicitationHistoryRepository;

        public SolicitationHistoryService(ISolicitationHistoryRepository solicitationHistoryRepository)
        {
            _solicitationHistoryRepository = solicitationHistoryRepository ?? throw new ArgumentNullException(nameof(solicitationHistoryRepository));
        }

        public async Task Create(SolicitationHistory solicitationHistory)
        {
            if (solicitationHistory == null)
                throw new SolicitationHistoryException("Solicitation History is Null");

            _solicitationHistoryRepository.Create(solicitationHistory);
            await _solicitationHistoryRepository.UnitOfWork.SaveChangesAsync().ConfigureAwait(false);
        }

        public List<SolicitationHistory> GetAll() => _solicitationHistoryRepository.GetAll().ToList();

        public async Task<SolicitationHistory> GetByIdAsync(Guid id) => await  _solicitationHistoryRepository.GetByIdAsync(id).ConfigureAwait(false);
       
    }
}
