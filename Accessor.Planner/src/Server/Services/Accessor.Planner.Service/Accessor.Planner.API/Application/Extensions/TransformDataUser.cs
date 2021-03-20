using Accessor.Planner.API.Application.Model.DTO;
using Accessor.Planner.API.Application.Model.ViewModel;
using Accessor.Planner.Domain.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Accessor.Planner.API.Application.Extensions
{
    public static class TransformDataUser
    {
        public static User ToUser(this UserDTO user)
        {
            return new User(user.UserName, user.Email, user.Password);
        }

        public static UserViewModel ToViewModel(this User user)
        {
            return new UserViewModel()
            {
                UserName = user.UserName,
                Email = user.Email
            };
        }
    }
}
