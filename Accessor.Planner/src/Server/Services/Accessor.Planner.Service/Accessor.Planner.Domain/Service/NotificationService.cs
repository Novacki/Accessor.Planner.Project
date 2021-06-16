using Accessor.Planner.Domain.Interface;
using Accessor.Planner.Domain.Model;
using Notification;
using System;
using System.Collections.Generic;
using System.Text;

namespace Accessor.Planner.Domain.Service
{
    public class NotificationService : INotificationService
    {
        private readonly INotificationManager _notificationManager;

        public NotificationService(INotificationManager notificationManager)
        {
            _notificationManager = notificationManager ?? throw new ArgumentNullException(nameof(notificationManager));
        }

        public void SendDeafault(List<Client> accessors, string subject, string profile, string profileName) => accessors.ForEach(a =>
        {
            SendEmail(a.User.Email, subject, GetDefaultTemplate(subject, profile, profileName));
        });

        public void SendDeafault(List<Provider> providers, string subject, string profile, string profileName) => providers.ForEach(p =>
        {
            SendEmail(p.User.Email, subject, GetDefaultTemplate(subject, profile, profileName));
        });

        public void SendDeafault(Client accessor, string subject, string profile, string profileName) => SendEmail(accessor.User.Email, subject, GetDefaultTemplate(subject, profile, profileName));
        public void SendDeafault(Provider provider, string subject, string profile, string profileName) => SendEmail(provider.User.Email, subject, GetDefaultTemplate(subject, profile, profileName));
        public void SendRejectMail(Client client, string subject, string profile, string profileName, string reason) => SendEmail(client.User.Email, subject, GetRejectTemplate(subject, profile, profileName, reason));
        public void SendRejectMail(Provider provider, string subject, string profile, string profileName, string reason) => SendEmail(provider.User.Email, subject, GetRejectTemplate(subject, profile, profileName, reason));
       
        private void SendEmail(string to, string subject, string body)
        {
            var result = _notificationManager.Send(to, subject, body);
        }

        private string GetDefaultTemplate(string status, string profile, string profileName)
        {
            return $"<h1 style='color: brown'>Solicitação <b> { status } </b></h1>" +
                   $"<div style='font-size: 18px; margin-left: 1 %;'>" +
                   $"<label>Sua Solicitação está <b>{ status }<b> pelo(a) { profile } </label><b>{ profileName }</b>" +
                   $"</div>";
        }

        private string GetRejectTemplate(string status, string profile, string profileName, string reason)
        {
            return $"<h1 style='color: brown'>Solicitação <b> { status } </b></h1>" +
            $"<div style='font-size: 18px; margin-left: 1%;'>" +
            $"<label>Sua Solicitação foi { status }  pelo(a) { profile } </label><b>{ profileName }</b>" +
            $"</div>" +
            $"<h2 style='color: brown'>Motivo</h2>" +
            $"<p style='font-size: 18px; margin-left: 1%;'>{ reason }</p>";
        }
    }
}

  

   
        
  

    
    
    
    
    

    
    

