using Newtonsoft.Json;
using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

//TODO: will be refactored

namespace Proxy
{
    public interface IProxyApplication
    {
        Task Request<T>(T requestValue, string route);
    }
    public class ProxyApplication : IProxyApplication
    {
        public async Task Request<T>(T requestValue, string route)
        {
            using(var client = new HttpClient())
            {
                HttpConfig(client);
                var body = Encoding.UTF8.GetBytes(JsonConvert.SerializeObject(requestValue)); 
                var result = await client.PostAsJsonAsync(route, requestValue);
            }

        }

        private static void HttpConfig(HttpClient client)
        {
            client.BaseAddress = new Uri("http://localhost:5000/");
            client.DefaultRequestHeaders.Accept.Clear();
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
        }
    }
}
