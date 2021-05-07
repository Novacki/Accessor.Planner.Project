using Accessor.Planner.Domain.Exceptions.Core;
using Accessor.Planner.Domain.Model.Commom;
using Accessor.Planner.Domain.Model.Enum;
using System;
using System.Collections.Generic;
using System.Text;

namespace Accessor.Planner.Domain.Model
{
    public class Solicitation : DefaultValues<Guid>
    {
        private Solicitation() { }
        public Solicitation(Client client, List<Room> rooms)
        {
            Id = Guid.NewGuid();
            Status = StatusSolicitation.OnHold;
            Client = client;
            CreatedAt = DateTime.Now;
            UpdatedAt = DateTime.Now;
            Activate = true;
            AddRooms(rooms);
        }

        public DateTime SolicitationEndDate { get; private set; }
        public StatusSolicitation Status { get; private set; }
        public List<Room> Rooms { get; private set; }
        public Client Client { get; private set; }
        public Guid ClientId { get; private set; }
        public Guid? AccessorId { get; private set; }
        public Provider Provider { get; private set; }
        public Guid? ProviderId { get; private set; }


        public void AddRooms(Room room) => Rooms.Add(room);

        public void RemoveRooms(Room room) => Rooms.Remove(room);


        public void Cancel()
        {
            if (Status != StatusSolicitation.InReview || Client.Type != UserType.Client)
                throw new DomainException("Status Solicitation is Invalid");

            Status = StatusSolicitation.Canceled;
            DeletedAt = DateTime.Now;
            Activate = false;
        }

        public void Approve()
        {
            if (Status != StatusSolicitation.InReview || Client.Type != UserType.Client)
                throw new DomainException("Status Solicitation is Invalid");

            Status = StatusSolicitation.Approve;
        }

        public void ClientAccept(Guid accessorId, UserType type)
        {
            if (( Status != StatusSolicitation.OnHold && Status != StatusSolicitation.Reject ) || type == UserType.Client || accessorId == Guid.Empty )
                throw new DomainException("Status Solicitation is Invalid");

            Status = StatusSolicitation.Accept;
            AccessorId = accessorId;
        }

        public void ProviderAccept(Provider provider)
        {
            if (Status != StatusSolicitation.OnHold || Client.Type == UserType.Client || provider == null)
                throw new DomainException("Status Solicitation is Invalid");

            Status = StatusSolicitation.Accept;
            Provider = provider;
        }



        public void Reject(string reason)
        {
            if (Status != StatusSolicitation.InReview || string.IsNullOrEmpty(reason) || Client.Type != UserType.Client)
                throw new DomainException("Status Solicitation is Invalid");

            Status = StatusSolicitation.Reject;
        }

        public void Send()
        {
            if(Status != StatusSolicitation.Accept || Client.Type == UserType.Client )
                throw new DomainException("Status Solicitation is Invalid");

            Status = StatusSolicitation.InReview;
        }

        private void AddRooms(List<Room> rooms)
        {
            Rooms = new List<Room>();
            Rooms.AddRange(rooms);
        }
    }
}
