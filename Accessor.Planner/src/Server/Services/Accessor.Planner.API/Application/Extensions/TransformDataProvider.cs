using Accessor.Planner.API.Application.Model.DTO;
using Accessor.Planner.API.Application.Model.ViewModel;
using Accessor.Planner.Domain.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Accessor.Planner.API.Application.Extensions {
    public static class TransformDataProvider {
        public static Provider ToProvider(this ProviderDTO provider) {
            return new Provider(provider.Name, provider.FantasyName, provider.Cnpj, provider.Phone, provider.Address.ToAddress());
        }

        public static ProviderViewModel ToViewModel(this Provider provider) {
            return new ProviderViewModel() {
                Address = provider.Address.ToViewModel(),
                Cnpj = provider.Cnpj,
                FantasyName = provider.FantasyName,
                Name = provider.Name,
                Phone = provider.Phone
            };
        }
    }
}