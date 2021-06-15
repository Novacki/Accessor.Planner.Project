using Accessor.Planner.Domain.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace Accessor.Planner.Domain.Interface
{
    public interface INotificationService
    {
        public void SendEmail(string to, string subject, string body);
        public string GetDefaultTemplate(string status, string profile, string profileName);
        public string GetRejectTemplate(string status, string profile, string profileName, string reason);

    }
}
