using Accessor.Planner.API.Application.Extensions;
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
            if (userId == null)
                return BadRequest();

            var solicitations = await _solicitationService.GetByUserAsync(userId.Value);

            return Ok(solicitations.ToViewModel());
        }

        [HttpGet]
        [Route("solicitation/{id:Guid}")]
        public async Task<IActionResult> GetSolicitation(Guid? id)
        {
            if (id == null)
                return BadRequest();

            var solicitation = await _solicitationService.GetByIdAsync(id.Value);

            if (solicitation == null)
                return NotFound();

            return Ok(solicitation.ToViewModel());
        }
    }
}
