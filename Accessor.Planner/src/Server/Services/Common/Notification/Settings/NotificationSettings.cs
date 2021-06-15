using System;
using System.Collections.Generic;
using System.Text;

namespace Notification.Settings
{
    public class DefaultCredential
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }

    public class NotificationSettings
    {
        public string From { get; set; }
        public string Host { get; set; }
        public int Port { get; set; }
        public DefaultCredential Credential { get; set; }
    }
}
