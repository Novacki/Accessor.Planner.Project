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
        [Route("{userId:guid}/accept/{solicitationId:guid}")]
        public async Task<IActionResult> Accept(Guid? userId, Guid? solicitationId)
        {
            if (!userId.HasValue || !solicitationId.HasValue)
                return BadRequest();

            await _solicitationService.Accept(userId.Value, solicitationId.Value);
            return Ok();
        }


        [HttpPut]
        [Route("{userId:guid}/send/{solicitationId:guid}")]
        public async Task<IActionResult> Send(Guid? userId, Guid? solicitationId)
        {
            if (!userId.HasValue || !solicitationId.HasValue)
                return BadRequest();

            await _solicitationService.Send(userId.Value, solicitationId.Value);

            return Ok();
        }

        [HttpPut]
        [Route("{userId:guid}/approve/{solicitationId:guid}")]
        public async Task<IActionResult> Approve(Guid? userId, Guid? solicitationId)
        {
            if (!userId.HasValue || !solicitationId.HasValue)
                return BadRequest();

            await _solicitationService.Approve(userId.Value, solicitationId.Value);
            return Ok();
        }

        [HttpPut]
        [Route("{userId:guid}/reject/{solicitationId:guid}")]
        public async Task<IActionResult> Reject(Guid? userId, Guid? solicitationId)
        {
            if (!userId.HasValue || !solicitationId.HasValue || string.IsNullOrEmpty("A"))
                return BadRequest();

            await _solicitationService.Reject(userId.Value, solicitationId.Value, "A");

            return Ok();
        }

        [HttpPut]
        [Route("{userId:guid}/cancel/{solicitationId:guid}")]
        public async Task<IActionResult> Cancel(Guid? userId, Guid? solicitationId)
        {
            if (!userId.HasValue || !solicitationId.HasValue)
                return BadRequest();

            await _solicitationService.Cancel(userId.Value, solicitationId.Value, "Adicionar");
            return Ok();
        }
    }
}
