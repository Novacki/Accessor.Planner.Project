using Accessor.Planner.API.Application.Extensions;
using Accessor.Planner.API.Application.Model.DTO;
using Accessor.Planner.Domain.Interface;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Accessor.Planner.API.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class ClientsController : Controller
    {
        private readonly IClientService _clientService;
        public ClientsController(IClientService clientService)
        {
            _clientService = clientService ?? throw new ArgumentNullException(nameof(clientService));
        }

        [HttpGet]
        [Route("client-content/{clientId:guid}")]
        public async Task<IActionResult> GetById(Guid? clientId)
        {
            if (!clientId.HasValue)
                return BadRequest();

            var client = await _clientService.GetByIdAsync(clientId.Value);

            if (client == null)
                return NoContent();

            return Ok(client.ToFullViewModel());
        }


        [HttpGet]
        [Route("me/{id:guid}")]
        public async Task<IActionResult> Get(Guid? id)
        {
            if (!id.HasValue)
                return BadRequest();

            var client = await _clientService.GetByIdAsync(id.Value);

            if (client == null)
                return NotFound();

            return Ok(client.ToViewModel());
        }

        [HttpGet]
        [Route("{userId:guid}")]
        public async Task<IActionResult> GetByUser(Guid? userId)
        {
            if (!userId.HasValue)
                return BadRequest();

            var client = await _clientService.GetClientByUserIdAsync(userId.Value);

            if (client == null)
                return NoContent();

            return Ok(client.ToViewModel());
        }

      
        [HttpPost]
        [Route("create")]
        public async Task<IActionResult> Create([FromBody] FullDataClientDTO clientDTO)
        {
            if (clientDTO == null)
                return BadRequest();

            await _clientService.Create(clientDTO.ToClient());

            return Ok();
        }

        [HttpGet]
        [Route("type/{type:int}")]
        public async Task<IActionResult> GetByUserType(int type)
        {
            var clients = await _clientService.GetAllByType(TransformDataEnums.GetTypeUser(type));

            if (clients == null || clients.Count == 0)
                return NotFound();

            return Ok(clients.ToViewModel());
        }


        [HttpPut]
        [Route("update/{id:guid}")]
        public async Task<IActionResult> Update(Guid? id, [FromBody] FullDataClientDTO clientDTO)
        {
            if (clientDTO == null || !id.HasValue)
                return BadRequest();

            await _clientService.Update(id.Value, clientDTO.Phone, clientDTO.Address.ToAddress());

            return Ok();
        }

        [HttpPut]
        [Route("add-address/{id:guid}")]
        public IActionResult AddAddress(Guid? id, AddressDTO addressDTO)
        {
            if (addressDTO == null || !id.HasValue)
                return BadRequest();

            _clientService.AddAddress(id.Value, addressDTO.ToAddress());

            return Ok();
        }

        [HttpPut]
        [Route("remove-address/{id:guid}/{addressId:int}")]
        public IActionResult RemoveAddress(Guid? id, int? addressId)
        {
            if (addressId == null || !id.HasValue)
                return BadRequest();

            _clientService.RemoveAddress(id.Value, addressId.Value);

            return Ok();
        }
    }
}
