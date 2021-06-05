using Accessor.Planner.API.Application.Extensions;
using Accessor.Planner.API.Application.Model.DTO;
using Accessor.Planner.API.Application.Model.ViewModel;
using Accessor.Planner.Domain.Interface;
using Accessor.Planner.Domain.Model;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace Accessor.Planner.API.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class ProvidersController : Controller
    {
        private readonly IProviderService _providerService;

        public ProvidersController(IProviderService providerService)
        {
            _providerService = providerService ?? throw new ArgumentNullException(nameof(providerService));
        }


        [HttpGet]
        [ProducesResponseType(typeof(List<FullDataProviderViewModel>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.NoContent)]
        public async Task<IActionResult> GetAll()
        {
            var providers = _providerService.GetAll();

            if (providers == null || providers.Count() == 0)
                return NoContent();

            return Ok(providers);
        }

        [HttpGet]
        [Route("{userId:guid}")]
        public async Task<IActionResult> GetByUser(Guid? userId)
        {
            if (!userId.HasValue)
                return BadRequest();

            var provider = await _providerService.GetByUserId(userId.Value);

            if (provider == null)
                return NoContent();

            return Ok(provider.ToViewModel());
        }

        [HttpGet]
        [ProducesResponseType(typeof(FullDataProviderViewModel), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.NoContent)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        [Route("me/{id:Guid}")]
        public async Task<IActionResult> Get(Guid? id)
        {
            if (!id.HasValue)
                return BadRequest();

            var provider = await _providerService.GetByIdAsync(id.Value);

            if (provider == null)
                return NoContent();

            return Ok(provider.ToViewModel());
        }

        [HttpPost]
        [ProducesResponseType((int)HttpStatusCode.Created)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> Create([FromBody] ProviderDTO providerDTO)
        {
            if (providerDTO == null)
                return BadRequest();

            await _providerService.Create(providerDTO.ToProvider());

            return Ok();
        }

        [HttpPut]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [Route("{id:Guid}")]
        public async Task<IActionResult> Update(Guid? id, [FromBody] ProviderDTO providerDTO)
        {
            if (!id.HasValue || providerDTO == null)
                return BadRequest();

            await _providerService.Update(id.Value, providerDTO.ToProvider());

            return Ok();
        }

        [HttpDelete]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [Route("{id:Guid}")]
        public async Task<IActionResult> Delete(Guid? id)
        {
            if (!id.HasValue)
                return BadRequest();

            await _providerService.Delete(id.Value);

            return Ok();
        }
    }
}

