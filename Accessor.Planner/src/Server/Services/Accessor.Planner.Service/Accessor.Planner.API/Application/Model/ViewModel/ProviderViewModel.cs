using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Accessor.Planner.API.Application.Model.ViewModel {
    public class DataProviderViewModel {
        public Guid Id { get; set; }
        public string FantasyName { get; set; }
    }

    public class FullDataProviderViewModel : DataProviderViewModel
    {
        public string SocialReason { get; set; }
        public string Cnpj { get; set; }
        public string Phone { get; set; }
        public UserViewModel User { get; set; }
        public AddressViewModel Address { get; set; }
    }
}