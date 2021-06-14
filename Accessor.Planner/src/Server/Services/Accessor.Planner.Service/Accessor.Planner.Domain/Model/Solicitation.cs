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
        }

        public void Accept(Client accessor)
        {
            if (( Status != StatusSolicitation.OnHold && Status != StatusSolicitation.Reject ) ||
                accessor.Type == UserType.Client || (accessor.Id != AccessorId && AccessorId.HasValue ))
                    throw new DomainException("Status Solicitation is Invalid");

            Status = StatusSolicitation.Accept;
            AccessorId = accessor.Id;
            UpdatedAt = DateTime.Now;

        }

        public void Accept(Provider provider)
        {
            if ((Status != StatusSolicitation.Approve && Status != StatusSolicitation.Reject) || (provider.Id != ProviderId && ProviderId.HasValue))
                throw new DomainException("Status Solicitation is Invalid");

            Status = StatusSolicitation.Accept;
            Provider = provider;
            UpdatedAt = DateTime.Now;

        }

        public void Send(Provider provider, DateTime solicitationEndDate)
        {
            if (Status != StatusSolicitation.Accept || provider.Id != ProviderId)
                throw new DomainException("Status Solicitation is Invalid");

            Status = StatusSolicitation.InReview;
            UpdatedAt = DateTime.Now;
            SolicitationEndDate = solicitationEndDate;
        }

        public void Send(Client accessor)
        {
            if (Status != StatusSolicitation.Accept || accessor.Type == UserType.Client || accessor.Id != AccessorId)
                throw new DomainException("Status Solicitation is Invalid");

            Status = StatusSolicitation.InReview;
            UpdatedAt = DateTime.Now;
   
        }

        public void Reject(Client client, string reason)
        {
            if (Status != StatusSolicitation.InReview || string.IsNullOrEmpty(reason) 
                || client.Type != UserType.Client || client.Id != Client.Id)
                throw new DomainException("Status Solicitation is Invalid");

            Status = StatusSolicitation.Reject;
            UpdatedAt = DateTime.Now;
            SolicitationEndDate = null;
        }

        public void CancelAccessor(Client accessor, string reason)
        {
            if(Status != StatusSolicitation.Reject || string.IsNullOrEmpty(reason) || accessor.Id != AccessorId)
                throw new DomainException("Status Solicitation is Invalid");

            Status = StatusSolicitation.OnHold;
            AccessorId = null;
            UpdatedAt = DateTime.Now;
        }

        public void Cancel(Provider provider, string reason)
        {
            if (Status != StatusSolicitation.Reject || string.IsNullOrEmpty(reason) || provider.Id != ProviderId)
                throw new DomainException("Status Solicitation is Invalid");

            Status = StatusSolicitation.Approve;
            Provider = null;
            SolicitationEndDate = null;
            UpdatedAt = DateTime.Now;
        }

        public void Done(Provider provider)
        {
            if( Provider == null || ProviderId != provider.Id || Status != StatusSolicitation.Approve )
                throw new DomainException("This Solicitation cannot be closed");

            Status = StatusSolicitation.Done;
            UpdatedAt = DateTime.Now;
        }

        public void Cancel(Client client, string reason)
        {
            if (string.IsNullOrEmpty(reason) || client.Type != UserType.Client || client.Id != Client.Id )
                throw new DomainException("Status Solicitation is Invalid");

            Status = StatusSolicitation.Canceled;
            DeletedAt = DateTime.Now;
            Activate = false;

 
        }

        private void AddRooms(List<Room> rooms)
        {
            Rooms = new List<Room>();
            Rooms.AddRange(rooms);
        }

    }
}
