using Accessor.Planner.Domain.Model.Commom;
using System;
using System.Collections.Generic;
using System.Text;

namespace Accessor.Planner.Domain.Model
{
    public class Provider: DefaultValues<Guid>
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
            Solicitations = new List<Solicitation>();
        }

        public string Name { get; private set; }
        public string FantasyName { get; private set; }
        public string Cnpj { get; private set; }
        public string Phone { get; private set; }
        public Address Address { get; private set; }
        public User User { get; private set; }
        public List<Solicitation> Solicitations { get; private set; }
    }
}
