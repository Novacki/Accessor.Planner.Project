using Accessor.Planner.API.Application.Model.DTO;
using Accessor.Planner.API.Application.Model.ViewModel;
using Accessor.Planner.Domain.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Accessor.Planner.API.Application.Extensions
{
    public static class TransformDataProvider
    {
        public static Provider ToProvider(this ProviderDTO provider)
        {
            return new Provider(provider.FantasyName, provider.SocialReason, provider.Cnpj, provider.Phone, provider.Address.ToAddress(), provider.User.ToUser());
        }

        public static FullDataProviderViewModel ToFullViewModel(this Provider provider)
        {
            return new FullDataProviderViewModel()
            {
                Id = provider.Id,
                Address = provider.Address.ToViewModel(),
                Cnpj = provider.Cnpj,
                FantasyName = provider.FantasyName,
                SocialReason = provider.SocialReason,
                Phone = provider.Phone,
                User = provider.User.ToViewModel()
            };
        }

        public static DataProviderViewModel ToViewModel(this Provider provider)
        {
            return new DataProviderViewModel()
            {
                Id = provider.Id,
                FantasyName = provider.FantasyName,
            };
        }
    }
}