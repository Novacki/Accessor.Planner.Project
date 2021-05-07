using Accessor.Planner.Domain.Model.Enum;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Accessor.Planner.API.Application.Extensions
{
    public static class TransformDataEnums
    {
        public static UserType GetTypeUser(int value)
        {
            return Enum.GetValues<UserType>().Where(user => (int)user == value).FirstOrDefault();
        }
    }
}
