using Accessor.Planner.API.Application.Model.DTO;
using Accessor.Planner.API.Application.Model.ViewModel;
using Accessor.Planner.Domain.Model;
using Accessor.Planner.Domain.Model.Enum;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Accessor.Planner.API.Application.Extensions
{
    public static class TransformDataClient
    {
        public static Client ToClient(this FullDataClientDTO client) => new Client(client.Name, client.Cpf, client.BirthDate, client.Sex, 
            client.Phone, TransformDataEnums.GetTypeUser(client.Type), client.Address.ToAddress(), client.User.ToUser());

        public static FullDataClientViewModel ToFullViewModel(this Client client)
        {
            return new FullDataClientViewModel()
            {
                Id = client.Id,
                Name = client.Name,
                Phone = client.Phone,
                Cpf = client.Cpf,
                Sex = client.Sex,
                BirthDate = client.BirthDate,
                Type = client.Type,
                User = client.User.ToViewModel(),
                Address = client.Addresses.ToViewModel().LastOrDefault()
            };
        }

        public static DataClientViewModel ToViewModel(this Client client)
        {
            return new DataClientViewModel()
            {
                Id = client.Id,
                Name = client.Name,
                Type = client.Type,
            };
        }

        public static List<DataClientViewModel> ToViewModel(this List<Client> clients)
        {
            return clients.Select(c => new DataClientViewModel()
            {
                Id = c.Id,
                Name = c.Name,
                Type = c.Type

            }).ToList();
        }
    }
}
