using Newtonsoft.Json;
using Proxy.Settings;
using System;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

//TODO: will be refactored

namespace Proxy
{
    public interface IProxyApplication
    {
        Task<HttpResponseMessage> Request<T>(T requestValue, string route);
    }
    public class ProxyApplication : IProxyApplication
    {
        private readonly ProxySettings _proxySettings;

        public ProxyApplication(ProxySettings proxySettings)
        {
            _proxySettings = proxySettings;
        }
        public async Task<HttpResponseMessage> Request<T>(T requestValue, string route)
        {
            using(var client = new HttpClient())
            {
                _proxySettings.ConfigurationClientProxy(client);

                var body = Encoding.UTF8.GetBytes(JsonConvert.SerializeObject(requestValue));
                
                var result = await client.PostAsJsonAsync(route, requestValue);

                if (result.StatusCode == HttpStatusCode.InternalServerError)
                    throw new HttpRequestException("Error in Integration");

                return await Task.FromResult(result).ConfigureAwait(false);
            }

        }
    }
}
