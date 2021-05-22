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

            RegisterHistory(new SolicitationHistory(this, SubscribeType.Client));
        }

        public DateTime? SolicitationEndDate { get; private set; }
        public StatusSolicitation Status { get; private set; }
        public List<Room> Rooms { get; private set; }
        public List<SolicitationHistory> SolicitationHistories { get; private set; }
        public Client Client { get; private set; }
        public Guid ClientId { get; private set; }
        public Guid? AccessorId { get; private set; }
        public Provider Provider { get; private set; }
        public Guid? ProviderId { get; private set; }


        public void AddRooms(Room room) => Rooms.Add(room);

        public void RemoveRooms(Room room) => Rooms.Remove(room);


        public void Approve(Client client)
        {
            if (Status != StatusSolicitation.InReview || client.Type != UserType.Client || client.Id != Client.Id)
                throw new DomainException("Status Solicitation is Invalid");

            Status = StatusSolicitation.Approve;
            UpdatedAt = DateTime.Now;
            //SolicitationHistories.Add(new SolicitationHistory(this, SubscribeType.Client));
        }

        public void AcessorAccept(Client accessor)
        {
            if (( Status != StatusSolicitation.OnHold && Status != StatusSolicitation.Reject ) ||
                accessor.Type == UserType.Client || (accessor.Id != AccessorId && AccessorId.HasValue ))
                    throw new DomainException("Status Solicitation is Invalid");

            Status = StatusSolicitation.Accept;
            AccessorId = accessor.Id;
            UpdatedAt = DateTime.Now;
            //SolicitationHistories.Add(new SolicitationHistory(this, SubscribeType.Accessor));
        }

        public void ProviderAccept(Provider provider)
        {
            if (Status != StatusSolicitation.OnHold || Client.Type != UserType.Client )
                throw new DomainException("Status Solicitation is Invalid");

            Status = StatusSolicitation.Accept;
            Provider = provider;
            UpdatedAt = DateTime.Now;
            //SolicitationHistories.Add(new SolicitationHistory(this, SubscribeType.Provider));
        }

        public void Send(Client accessor)
        {
            if (Status != StatusSolicitation.Accept || accessor.Type == UserType.Client || accessor.Id != AccessorId)
                throw new DomainException("Status Solicitation is Invalid");

            Status = StatusSolicitation.InReview;
            UpdatedAt = DateTime.Now;
            //SolicitationHistories.Add(new SolicitationHistory(this, SubscribeType.Accessor));
        }

        public void Reject(Client client, string reason)
        {
            if (Status != StatusSolicitation.InReview || string.IsNullOrEmpty(reason) 
                || client.Type != UserType.Client || client.Id != Client.Id)

                throw new DomainException("Status Solicitation is Invalid");

            Status = StatusSolicitation.Reject;
            UpdatedAt = DateTime.Now;
            //SolicitationHistories.Add(new SolicitationHistory(this, SubscribeType.Client));
        }

        public void Cancel(Client client, string reason)
        {
            if (string.IsNullOrEmpty(reason) || client.Type != UserType.Client || client.Id != Client.Id || SolicitationEndDate.HasValue)
                throw new DomainException("Status Solicitation is Invalid");

            Status = StatusSolicitation.Canceled;
            DeletedAt = DateTime.Now;
            Activate = false;

            //SolicitationHistories.Add(new SolicitationHistory(this, SubscribeType.Client));
        }

        private void AddRooms(List<Room> rooms)
        {
            Rooms = new List<Room>();
            Rooms.AddRange(rooms);
        }

        private void RegisterHistory(SolicitationHistory solicitationHistory)
        {
            SolicitationHistories = new List<SolicitationHistory>();
            SolicitationHistories.Add(solicitationHistory);
        }
    }
}
