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

        [HttpPost]
        [Route("create")]
        public async Task<IActionResult> Create([FromBody] ClientDTO clientDTO)
        {
            if (clientDTO == null)
                return BadRequest();

            await _clientService.Create(clientDTO.ToClient());

            return Ok();
        }

        [HttpGet]
        [Route("{userId:Guid}/solicitations")]
        public IActionResult GetSolicitations(Guid? userId)
        {
            if (userId == null)
                return BadRequest();

            var solicitations = _clientService.GetSolicitationsByUser(userId.Value);

            return Ok(solicitations.ToViewModel());
        }

        [HttpGet]
        [Route("solicitation/{id:Guid}")]
        public async Task<IActionResult> GetSolicitation(Guid? id)
        {
            if(id == null)
                return BadRequest();

            var solicitation = await _clientService.GetSolicitationById(id.Value);

            if (solicitation == null)
                return NotFound();

            return Ok(solicitation.ToViewModel());
        }

        [HttpGet]
        [Route("me/{id:guid}")]
        public async Task<IActionResult> Get(Guid? id)
        {
            if (id == null)
                return BadRequest();

            var client = await _clientService.GetByIdAsync(id.Value);

            if (client == null)
                return NotFound();

            return Ok(client.ToViewModel());
        }

        [HttpPut]
        [Route("update/{id:guid}")]
        public async Task<IActionResult> Update(Guid? id, [FromBody] ClientDTO clientDTO)
        {
            if (clientDTO == null || !id.HasValue)
                return BadRequest();

            await _clientService.Update(id.Value, clientDTO.ToClient());

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
        [Route("remove-address/{id:guid}")]
        public IActionResult RemoveAddress(Guid? id, AddressDTO addressDTO)
        {
            if (addressDTO == null || !id.HasValue)
                return BadRequest();

            _clientService.AddAddress(id.Value, addressDTO.ToAddress());

            return Ok();
        }

        [HttpPut]
        [Route("create-solicitation")]
        public async Task<IActionResult> CreateSolicitation([FromBody] SolicitationDTO solicitationDTO)
        {
            if (solicitationDTO == null)
                return BadRequest();

            await _clientService.CreateSolicitation(solicitationDTO.UserId, 
                solicitationDTO.Rooms.ToRoom());

            return Ok();
        }

        [HttpPut]
        [Route("{userId:guid}/accept/{solicitationId:guid}")]
        public async Task<IActionResult> AcceptSolicitation(Guid? userId, Guid? solicitationId)
        {
            if (!userId.HasValue || !solicitationId.HasValue)
                return BadRequest();

            await _clientService.AcceptSolicitation(userId.Value, solicitationId.Value);
            return Ok();
        }

        [HttpPut]
        [Route("{userId:guid}/send/{solicitationId:guid}")]
        public async Task<IActionResult> SendSolicitation(Guid? userId, Guid? solicitationId)
        {
            if (!userId.HasValue || !solicitationId.HasValue)
                return BadRequest();

            await _clientService.SendSolicitation(userId.Value, solicitationId.Value);

            return Ok();
        }

        [HttpPut]
        [Route("{userId:guid}/approve/{solicitationId:guid}")]
        public async Task<IActionResult> ApproveSolicitation(Guid? userId, Guid? solicitationId)
        {
            if (!userId.HasValue || !solicitationId.HasValue)
                return BadRequest();

            await _clientService.ApproveSolicitation(userId.Value, solicitationId.Value);
            return Ok();
        }

        [HttpPut]
        [Route("{userId:guid}/reject/{solicitationId:guid}")]
        public async Task<IActionResult> RejectSolicitation(Guid? userId, Guid? solicitationId, [FromBody] string reason)
        {
            if (!userId.HasValue || !solicitationId.HasValue || string.IsNullOrEmpty(reason))
                return BadRequest();

            await _clientService.RejectSolicitation(userId.Value, solicitationId.Value, reason);

            return Ok();
        }

        [HttpPut]
        [Route("{userId:guid}/cancel/{solicitationId:guid}")]
        public async Task<IActionResult> CancelSolicitation(Guid? userId, Guid? solicitationId)
        {
            if (!userId.HasValue || !solicitationId.HasValue)
                return BadRequest();

            await _clientService.CancelSolicitation(userId.Value, solicitationId.Value);
            return Ok();
        }
    }
}
