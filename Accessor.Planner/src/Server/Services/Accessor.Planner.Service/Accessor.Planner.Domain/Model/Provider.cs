using Accessor.Planner.Domain.Exceptions.Core;
using Accessor.Planner.Domain.Model.Commom;
using System;
using System.Collections.Generic;
using System.Text;

namespace Accessor.Planner.Domain.Model
{
    public class Provider : DefaultValues<Guid>
    {
        private Provider() { }

        public Provider(string name, string fantasyName, string cnpj, string phone, Address address)
        {
            Id = Guid.NewGuid();
            Name = name;
            FantasyName = fantasyName;
            Cnpj = cnpj;
            Phone = phone;
            Address = address;
            CreatedAt = DateTime.Now;
            UpdatedAt = DateTime.Now;
            Solicitations = new List<Solicitation>();
        }

        public string Name { get; private set; }
        public string FantasyName { get; private set; }
        public string Cnpj { get; private set; }
        public string Phone { get; private set; }
        public Address Address { get; private set; }
        public User User { get; private set; }
        public List<Solicitation> Solicitations { get; private set; }


        public void Update(string name, string fantasyName, string phone)
        {
            if (string.IsNullOrEmpty(name) || string.IsNullOrEmpty(fantasyName) || string.IsNullOrEmpty(phone))
                throw new DomainException("Value is Null");

            Name = name;
            FantasyName = fantasyName;
            Phone = phone;
        }

        public void Delete()
        {
            Activate = false;
            DeletedAt = DateTime.Now;
        }
    }
}