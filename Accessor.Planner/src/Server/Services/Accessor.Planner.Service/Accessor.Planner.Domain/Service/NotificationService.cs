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

        public string GetDefaultTemplate(string status, string profile, string profileName)
        {
            return $"<h1 style='color: brown'>Solicitação <b> { status } </b></h1>" +
                   $"<div style='font-size: 18px; margin-left: 1 %;'>" +
                   $"<label>Sua Solicitação está <b>{ status }<b> pelo(a) { profile } </label><b>{ profileName }</b>" +
                   $"</div>";
        }

        public string GetRejectTemplate(string status, string profile, string profileName, string reason)
        {
            return $"<h1 style='color: brown'>Solicitação <b> { status } </b></h1>" +
            $"<div style='font-size: 18px; margin-left: 1%;'>" +
            $"<label>Sua Solicitação foi { status }  pelo(a) { profile } </label><b>{ profileName }</b>" + 
            $"</div>"+
            $"<h2 style='color: brown'>Motivo</h2>" +
            $"<p style='font-size: 18px; margin-left: 1%;'>{ reason }</p>";
        }

        public void SendEmail(string to, string subject, string body)
        {
            var result = _notificationManager.Send(to, subject, body);

            if (!result)
                throw new Exception();
        }
    }
}

  

   
        
  

    
    
    
    
    

    
    

