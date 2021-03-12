using Accessor.Planner.Domain.Model.Commom;
using Accessor.Planner.Domain.Model.Enum;
using System;
using System.Collections.Generic;
using System.Text;

namespace Accessor.Planner.Domain.Model
{
    public class Client: DefaultValues<Guid>
    {
        private Client() { }

        public Client(string cpf, int age, char sex, string phone, UserType type)
        {
            Id = Guid.NewGuid();
            Cpf = cpf;
            Age = age;
            Sex = sex;
            Phone = phone;
            Type = type;
            Addresses = new List<Address>();
            CreatedAt = DateTime.Now;
            Activate = true;
            Solicitations = new List<Solicitation>();
        }

        public string Cpf { get; private set; }
        public int Age { get; private set; }
        public char Sex { get; private set; }
        public string Phone { get; private set; }
        public UserType Type { get; private set; }
        public List<Address> Addresses { get; private set; }
        public User User { get; private set; }
        public List<Solicitation> Solicitations { get; private set; }
    }
}
