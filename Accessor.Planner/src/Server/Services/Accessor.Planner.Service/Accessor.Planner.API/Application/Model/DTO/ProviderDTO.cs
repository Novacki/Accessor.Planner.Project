using Accessor.Planner.Domain.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Accessor.Planner.API.Application.Model.DTO {
    public class ProviderDTO {
        public string Name { get; set; }
        public string FantasyName { get; set; }
        public string Cnpj { get; set; }
        public string Phone { get; set; }
        public AddressDTO Address { get; set; }
    }
}