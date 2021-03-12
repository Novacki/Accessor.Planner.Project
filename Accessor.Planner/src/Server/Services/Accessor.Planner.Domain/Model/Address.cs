using Accessor.Planner.Domain.Model.Commom;
using System;
using System.Collections.Generic;
using System.Text;

namespace Accessor.Planner.Domain.Model
{
    public class Address : DefaultValues<int>
    {
        private Address() { }

        public Address(string cep, string state, string city, string number, string street)
        {
            Cep = cep;
            State = state;
            City = city;
            Number = number;
            Street = street;
            CreatedAt = DateTime.Now;
            Activate = true;
        }

        public Address(string cep, string state, string city, string number, string street, string complement) : this(cep, state, city, number, street)
        {
            Complement = complement;
            CreatedAt = DateTime.Now;
        }

        public string Cep { get; private set; }
        public string State { get; private set; }
        public string City { get; private set; }
        public string Number { get; private set; }
        public string Street  { get; private set; }
        public string Complement { get; private set; }
    }
}
