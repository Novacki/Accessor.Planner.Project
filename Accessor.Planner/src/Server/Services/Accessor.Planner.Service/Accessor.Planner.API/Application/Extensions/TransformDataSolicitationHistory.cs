using Accessor.Planner.API.Application.Model.ViewModel;
using Accessor.Planner.Domain.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Accessor.Planner.API.Application.Extensions
{
    public static class TransformDataSolicitationHistory
    {
        public static SolicitationHistoryViewModel ToViewModel(this SolicitationHistory solicitationHistory)
        {
            return new SolicitationHistoryViewModel()
            {
                AccessorId = solicitationHistory.AcessorId,
                ProviderId = solicitationHistory.ProviderId,
                Status = (int)solicitationHistory.Status,
                Type = (int)solicitationHistory.Type,
                Value = solicitationHistory.Value,
                CreatedAt = solicitationHistory.CreatedAt
            };
        }

        public static List<SolicitationHistoryViewModel> ToViewModel(this List<SolicitationHistory> solicitationHistories)
        {
            return solicitationHistories.Select(s => new SolicitationHistoryViewModel() 
            { 
                AccessorId = s.AcessorId,
                ProviderId = s.ProviderId,
                Status = (int)s.Status,
                Type = (int)s.Type,
                Value = s.Value,
                CreatedAt = s.CreatedAt

            }).ToList();
        }
    }
}
