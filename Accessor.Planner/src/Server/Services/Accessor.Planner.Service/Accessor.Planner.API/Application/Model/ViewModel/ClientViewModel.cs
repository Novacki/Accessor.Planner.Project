using Accessor.Planner.Domain.Model.Enum;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Accessor.Planner.API.Application.Model.ViewModel
{
    public class DataClientViewModel
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public UserType Type { get; set; }
    }
    public class FullDataClientViewModel : DataClientViewModel
    {
        public string Cpf { get; set; }
        public DateTime BirthDate { get; set; }
        public char Sex { get;  set; }
        public string Phone { get;  set; }
        public List<AddressViewModel> Addresses { get; set; }
    }
}
