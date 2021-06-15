using Notification.Settings;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Mail;
using System.Text;

namespace Notification
{
    public interface INotificationManager
    {
        public bool Send(string to, string subject, string body, bool isBodyHtml = true, bool defaultCredentials = true);
    }
    public class NotificationManager : INotificationManager
    {
        private readonly NotificationSettings _notificationSettings;
        public MailMessage EmailMessage { get; private set; }
        public SmtpClient SmtpClient { get; private set; }

        public NotificationManager(NotificationSettings notificationSettings)
        {
            _notificationSettings = notificationSettings ?? throw new ArgumentNullException(nameof(notificationSettings));
            SmtpClient = new SmtpClient(_notificationSettings.Host, _notificationSettings.Port);
        }

        public bool Send(string to, string subject, string body, bool isBodyHtml = true, bool defaultCredentials = true)
        {
            EmailMessage = new MailMessage(_notificationSettings.From, to, subject, body);
            EmailMessage.IsBodyHtml = isBodyHtml;
            EmailMessage.BodyEncoding = Encoding.GetEncoding("UTF-8");
            EmailMessage.SubjectEncoding = Encoding.GetEncoding("UTF-8");

            try
            {
                SmtpClient.UseDefaultCredentials = !defaultCredentials;
                SmtpClient.Credentials = new NetworkCredential(_notificationSettings.Credential.Email, _notificationSettings.Credential.Password);
                SmtpClient.EnableSsl = true;
                SmtpClient.Send(EmailMessage);

                return true;

            }
            catch (Exception e)
            {
                return false;
            }
        }
    }
}
