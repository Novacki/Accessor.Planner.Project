using Accessor.Planner.Domain.Model.Enum;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Accessor.Planner.API.Application.Model.DTO
{
    public class ClientDTO
    {
        public string Name { get; set; }
        public string Phone { get; set; }
        public DateTime BirthDate { get; set; }
    }
    public class FullDataClientDTO : ClientDTO
    {
        public char Sex { get;  set; }
        public string Cpf { get; set; }
        public int Type { get; set; }
        public UserDTO User { get; set; }
        public AddressDTO Address { get; set; }

    }
}
