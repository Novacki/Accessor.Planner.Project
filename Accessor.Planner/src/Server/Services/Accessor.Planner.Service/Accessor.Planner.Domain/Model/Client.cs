using Accessor.Planner.Domain.Exceptions.Core;
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

        public Client(string name, string cpf, DateTime birthDate, char sex, string phone, UserType type, List<Address> addresses, User user)
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
            AddAddresses(addresses);
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

        public void Update(string name, string phone, DateTime birthDate)
        {
            if (string.IsNullOrEmpty(phone) || string.IsNullOrEmpty(name) || birthDate == null)
                throw new DomainException("Phone or Birth Date or Name is Null");

            BirthDate = birthDate;
            Phone = phone;
            Name = name;
        }

        public void Delete()
        {
            Activate = false;
            DeletedAt = DateTime.Now;
        }
        public void AddSolicitation(Solicitation solicitation)
        {
            if (Type != UserType.Client)
                throw new DomainException("Accessor Can't Create Solicitation");

            Solicitations.Add(solicitation);
        }

        public void CancelSolicitation(Solicitation solicitation)
        {
            if (Type != UserType.Client)
                throw new DomainException("Accessor Can't Create Solicitation");

            solicitation.Cancel();
        }

        public void Approve(Solicitation solicitation)
        {
            if (Type != UserType.Client)
                throw new DomainException("Accessor Can't Create Solicitation");

            solicitation.Cancel();
        }

        private void AddAddresses(List<Address> addresses)
        {
            Addresses = new List<Address>();
            Addresses.AddRange(addresses);
        }
    }
}
