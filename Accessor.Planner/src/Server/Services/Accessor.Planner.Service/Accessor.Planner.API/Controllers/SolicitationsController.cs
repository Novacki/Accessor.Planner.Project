using Accessor.Planner.API.Application.Extensions;
using Accessor.Planner.API.Application.Model.DTO;
using Accessor.Planner.API.Application.Model.ViewModel;
using Accessor.Planner.Domain.Interface;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace Accessor.Planner.API.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class SolicitationsController : Controller 
    {
        private readonly ISolicitationService _solicitationService;

        public SolicitationsController(ISolicitationService solicitationService)
        {
            _solicitationService = solicitationService ?? throw new ArgumentNullException(nameof(solicitationService));
        }

        [HttpGet]
        [Route("{userId:Guid}/solicitations")]
        public async Task<IActionResult> GetSolicitations(Guid? userId)
        {
            if (!userId.HasValue)
                return BadRequest();

            var solicitations = await _solicitationService.GetSolicitationsByUserAsync(userId.Value);

            if (solicitations == null || solicitations.Count == 0)
                return NoContent();

            return Ok(solicitations.ToViewModel());
        }

        [HttpGet]
        [Route("filter")]
        public IActionResult Get([FromQuery] Guid? profileContextId, int? status,  int? userType)
        {
            if (!profileContextId.HasValue || !status.HasValue)
                return BadRequest();

            var solicitations =  _solicitationService.GetSolicitationsByFilter(profileContextId.Value, 
                TransformDataEnums.GetStatusSolicitation(status.Value), TransformDataEnums.GetTypeUser(userType.Value));

            if (solicitations == null || solicitations.Count == 0)
                return NoContent();

            return Ok(solicitations.ToViewModel());
        }

        [HttpGet]
        [Route("solicitation/{id:Guid}")]
        public async Task<IActionResult> GetSolicitation(Guid? id)
        {
            if (!id.HasValue)
                return BadRequest();

            var solicitation = await _solicitationService.GetByIdAsync(id.Value);

            if (solicitation == null)
                return NoContent();

            return Ok(solicitation.ToViewModel());
        }

        [HttpPost]
        [Route("create")]
        public async Task<IActionResult> Create([FromBody] SolicitationDTO solicitationDTO)
        {
            if (solicitationDTO == null)
                return BadRequest();

            await _solicitationService.Create(solicitationDTO.UserId,
                solicitationDTO.Rooms.ToRoom());

            return Ok();
        }

        [HttpPut]
        [Route("update/{id:guid}")]
        public async Task<IActionResult> Update(Guid? id, [FromBody] SolicitationDTO solicitationDTO)
        {
            if (!id.HasValue || solicitationDTO == null)
                return BadRequest();

            await _solicitationService.Update(id.Value, solicitationDTO.Rooms.ToRoom());

            return Ok();
        }

        [HttpPut]
        [Route("{userId:guid}/accept-accessor/{solicitationId:guid}")]
        public async Task<IActionResult> AccessorAccept(Guid? userId, Guid? solicitationId)
        {
            if (!userId.HasValue || !solicitationId.HasValue)
                return BadRequest();

            await _solicitationService.AccessorAccept(userId.Value, solicitationId.Value);
            return Ok();
        }

        [HttpPut]
        [Route("accept-provider")]
        public async Task<IActionResult> ProviderrAccept(SolicitationOperationDTO solicitationDTO)
        {
            if (solicitationDTO == null)
                return BadRequest();

            await _solicitationService.ProviderAccept(solicitationDTO.UserId, solicitationDTO.SolicitationId);
            return Ok();
        }


        [HttpPut]
        [Route("{userId:guid}/send-accessor/{solicitationId:guid}")]
        public async Task<IActionResult> AccessorSend(Guid? userId, Guid? solicitationId)
        {
            if (!userId.HasValue || !solicitationId.HasValue)
                return BadRequest();

            await _solicitationService.AccessorSend(userId.Value, solicitationId.Value);

            return Ok();
        }

        [HttpPut]
        [Route("send-provider")]
        public async Task<IActionResult> ProviderSend(SolicitationResponseValueDTO solicitationDTO)
        {
            if (solicitationDTO == null)
                return BadRequest();

            await _solicitationService.ProviderSend(solicitationDTO.UserId, 
                solicitationDTO.SolicitationId, solicitationDTO.Value.Value, solicitationDTO.SolicitationEndDate.Value);

            return Ok();
        }

        [HttpPut]
        [Route("approve")]
        public async Task<IActionResult> Approve(SolicitationOperationDTO solicitationDTO)
        {
            if (solicitationDTO == null)
                return BadRequest();

            await _solicitationService.Approve(solicitationDTO.UserId, solicitationDTO.SolicitationId);

            return Ok();
        }

        [HttpPut]
        [Route("reject")]
        public async Task<IActionResult> Reject(SolicitationResponseDTO solicitationDTO)
        {
            if (solicitationDTO == null)
                return BadRequest();

            await _solicitationService.Reject(solicitationDTO.UserId, solicitationDTO.SolicitationId, solicitationDTO.Reason);

            return Ok();
        }

        [HttpPut]
        [Route("done")]
        public async Task<IActionResult> Done(SolicitationResponseValueDTO solicitationDTO)
        {
            if (solicitationDTO == null)
                return BadRequest();

            await _solicitationService.Done(solicitationDTO.UserId, solicitationDTO.SolicitationId, solicitationDTO.Value.Value);

            return Ok();
        }

        [HttpPut]
        [Route("cancel")]
        public async Task<IActionResult> Cancel(SolicitationResponseDTO solicitationDTO)
        {
            if (solicitationDTO == null)
                return BadRequest(); 

            await _solicitationService.Cancel(solicitationDTO.UserId, solicitationDTO.SolicitationId, solicitationDTO.Reason);
            return Ok();
        }

        [HttpPut]
        [Route("cancel-accessor")]
        public async Task<IActionResult> CancelAccessor(SolicitationResponseDTO solicitationDTO)
        {
            if (solicitationDTO == null)
                return BadRequest();

            await _solicitationService.CancelAccessor(solicitationDTO.UserId, solicitationDTO.SolicitationId, solicitationDTO.Reason);
            return Ok();
        }

        [HttpPut]
        [Route("cancel-provider")]
        public async Task<IActionResult> CancelProvider(SolicitationResponseDTO solicitationDTO)
        {
            if (solicitationDTO == null)
                return BadRequest();

            await _solicitationService.CancelProvider(solicitationDTO.UserId, solicitationDTO.SolicitationId, 
                solicitationDTO.Reason);

            return Ok();
        }
    }
}
