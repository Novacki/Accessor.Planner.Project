using Accessor.Planner.API.Application.Model.DTO;
using Accessor.Planner.API.Application.Model.ViewModel;
using Accessor.Planner.Domain.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Accessor.Planner.API.Application.Extensions
{
    public static class TransformDataAddress
    {
        public static Address ToAddress(this AddressDTO address)
        {
            return new Address(address.Cep, address.State, address.City, address.Number, address.Street, address.Complement);
        }

        public static List<Address> ToAddress(this List<AddressDTO> addresses)
        {
            return addresses.Select(address => new Address(address.Cep, address.State, address.City, address.Number, address.Street, address.Complement)).ToList();
        }

        public static AddressViewModel ToViewModel(this Address address)
        {
            return new AddressViewModel()
            {
                Id = address.Id,
                Cep = address.Cep,
                City = address.City,
                Complement = address.Complement,
                Number = address.Number,
                State = address.State,
                Street = address.Street
            };
        }

        public static List<AddressViewModel> ToViewModel(this List<Address> addresses)
        {
            return addresses.Select(a => new AddressViewModel() 
            {
                Id = a.Id,
                Cep = a.Cep,
                City = a.City,
                Complement = a.Complement,
                Number = a.Number,
                State = a.State,
                Street = a.Street

            }).ToList();
           
        }
    }
}