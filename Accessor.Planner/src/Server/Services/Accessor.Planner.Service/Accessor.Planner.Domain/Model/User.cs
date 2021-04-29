using Accessor.Planner.Domain.Exceptions;
using Accessor.Planner.Domain.Exceptions.Core;
using Accessor.Planner.Domain.Model.Commom;
using Accessor.Planner.Domain.Model.Enum;
using System;
using System.Collections.Generic;
using System.Text;

namespace Accessor.Planner.Domain.Model
{
    public class User : DefaultValues<Guid>
    {
        private User() { }

        public User(Guid id, string userName, string email, string password)
        {
            Id = id;
            UserName = userName;
            Email = email;
            Password = password;
            CreatedAt = DateTime.Now;
            UpdatedAt = DateTime.Now;
            Activate = true;
        }

        public string UserName { get; private set; }
        public string Email { get; private set; }
        public string Password { get; private set; }

        public void Update(string userName, string email, string password)
        {
            if (string.IsNullOrEmpty(userName) || string.IsNullOrEmpty(email) || string.IsNullOrEmpty(password))
                throw new DomainException("Value of Update is Null");

            UserName = userName;
            Email = email;
            Password = password;
            UpdatedAt = DateTime.Now;
        }

        public void Delete()
        {
            DeletedAt = DateTime.Now;
            Activate = false;
        }
    }
}
