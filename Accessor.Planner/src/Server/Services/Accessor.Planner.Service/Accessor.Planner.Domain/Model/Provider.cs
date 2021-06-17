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

        public Provider(string fantasyName, string socialReason, string cnpj, string phone, Address address, User user)
        {
            Id = Guid.NewGuid();
            FantasyName = fantasyName;
            SocialReason = socialReason;
            Cnpj = cnpj;
            Phone = phone;
            Address = address;
            CreatedAt = DateTime.Now;
            UpdatedAt = DateTime.Now;
            User = user;
            Solicitations = new List<Solicitation>();
        }

        public string SocialReason { get; private set; }
        public string FantasyName { get; private set; }
        public string Cnpj { get; private set; }
        public string Phone { get; private set; }
        public Address Address { get; private set; }
        public User User { get; private set; }
        public List<Solicitation> Solicitations { get; private set; }


        public void Update(string socialReason, string fantasyName, string phone, Address address)
        {
            if (string.IsNullOrEmpty(socialReason) || string.IsNullOrEmpty(fantasyName) || string.IsNullOrEmpty(phone) || address == null)
                throw new DomainException("Value is Null");

            SocialReason = socialReason;
            FantasyName = fantasyName;
            Address = address;
            Phone = phone;
        }

        public void Delete()
        {
            Activate = false;
            DeletedAt = DateTime.Now;
        }
    }
}