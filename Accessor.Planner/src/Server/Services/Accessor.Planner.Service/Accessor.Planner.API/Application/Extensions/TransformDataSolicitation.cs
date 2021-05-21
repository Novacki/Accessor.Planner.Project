using Accessor.Planner.API.Application.Model.ViewModel;
using Accessor.Planner.Domain.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Accessor.Planner.API.Application.Extensions
{
    public static class TransformDataSolicitation
    {
        public static SolicitationViewModel ToViewModel(this Solicitation solicitation)
        {
            return new SolicitationViewModel()
            {
                Id = solicitation.Id,
                AccessorId = solicitation.AccessorId,
                Provider = solicitation.Provider == null ? null : solicitation.Provider.ToViewModel(),
                Client = solicitation.Client.ToViewModel(),
                Status = (int)solicitation.Status,
                Rooms = solicitation.Rooms.ToViewModel()
            };
        }

        public static List<SolicitationViewModel> ToViewModel(this List<Solicitation> solicitations)
        {
            return solicitations.Select(s => new SolicitationViewModel()
            {
                Id = s.Id,
                AccessorId = s.AccessorId,
                Provider = s.Provider == null ? null : s.Provider.ToViewModel(),
                Client = s.Client.ToViewModel(),
                Status = (int)s.Status,
                Rooms = s.Rooms.ToViewModel()

            }).ToList();
            
        }
    }
}
