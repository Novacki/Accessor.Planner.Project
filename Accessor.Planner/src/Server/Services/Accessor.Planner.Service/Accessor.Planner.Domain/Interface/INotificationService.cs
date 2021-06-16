using Accessor.Planner.Domain.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace Accessor.Planner.Domain.Interface
{
    public interface INotificationService
    {
        public void SendRejectMail(Client accessor, string subject, string profile, string profileName, string reason);
        public void SendRejectMail(Provider provider, string subject, string profile, string profileName, string reason);
        public void SendDeafault(List<Client> accessors, string subject, string profile, string profileName);
        public void SendDeafault(List<Provider> providers, string subject, string profile, string profileName);
        public void SendDeafault(Client accessor, string subject, string profile, string profileName);
        public void SendDeafault(Provider provider, string subject, string profile, string profileName);
    }
}
