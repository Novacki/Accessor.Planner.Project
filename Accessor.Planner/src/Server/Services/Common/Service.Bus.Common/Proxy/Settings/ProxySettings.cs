using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;

namespace Proxy.Settings
{
    public class ProxySettings
    {
        public ProxySettings() { }
        public ProxySettings(string baseUrl, string contentType)
        {
            BaseUrl = baseUrl;
            ContentType = contentType;
        }

        public string BaseUrl { get;  set; }
        public string ContentType { get;  set; }

        public void ConfigurationClientProxy(HttpClient client)
        {
            client.BaseAddress = new Uri(BaseUrl);
            client.DefaultRequestHeaders.Accept.Clear();
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue(ContentType));
        }
    }
}
