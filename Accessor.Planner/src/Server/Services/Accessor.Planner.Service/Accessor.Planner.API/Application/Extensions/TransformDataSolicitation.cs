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
                ClientId = solicitation.ClientId,
                ProviderId = solicitation.ProviderId,
                Status = (int)solicitation.Status,
                Rooms = solicitation.Rooms.ToViewModel()
            };
        }
    }
}
