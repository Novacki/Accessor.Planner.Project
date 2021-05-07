using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Accessor.Planner.Domain.Interface
{
    public interface IIntegrationService
    {
        public Task Send<T>(T value, string route);
    }
}
