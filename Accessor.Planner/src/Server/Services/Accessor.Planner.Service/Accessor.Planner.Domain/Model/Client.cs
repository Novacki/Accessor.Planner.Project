using Accessor.Planner.Domain.Exceptions.Core;
using Accessor.Planner.Domain.Model.Commom;
using Accessor.Planner.Domain.Model.Enum;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Accessor.Planner.Domain.Model
{
    public class Client: DefaultValues<Guid>
    {
        private Client() { }

        public Client(string name, string cpf, DateTime birthDate, char sex, string phone, UserType type, Address address, User user)
        {
            Id = Guid.NewGuid();
            Name = name;
            Cpf = cpf;
            BirthDate = birthDate;
            Sex = sex;
            Phone = phone;
            Type = type;
            CreatedAt = DateTime.Now;
            UpdatedAt = DateTime.Now;
            Activate = true;
            Solicitations = new List<Solicitation>();
            AddAddresses(address);
            User = user;
        }

        public string Name { get; private set; }
        public string Cpf { get; private set; }
        public DateTime BirthDate { get; private set; }
        public char Sex { get; private set; }
        public string Phone { get; private set; }
        public UserType Type { get; private set; }
        public List<Address> Addresses { get; private set; }
        public User User { get; private set; }
        public List<Solicitation> Solicitations { get; private set; }


        public void AddAddress(Address address) => Addresses.Add(address);
        public void RemoveAddress(Address address) => Addresses.Remove(address);

        public void Update(string phone, Address address)
        {
            if (string.IsNullOrEmpty(phone) || address == null)
                throw new DomainException("Phone or Birth Date or Name is Null");

         
            Phone = phone;
            AddAddress(address);
        }

        public void Delete()
        {
            Activate = false;
            DeletedAt = DateTime.Now;
        }

        private void AddAddresses(Address address)
        {
            Addresses = new List<Address>();
            Addresses.Add(address);
        }
    }
}
