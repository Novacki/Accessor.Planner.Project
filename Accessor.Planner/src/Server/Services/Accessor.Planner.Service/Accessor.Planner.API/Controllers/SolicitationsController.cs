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
        [ProducesResponseType(typeof(List<SolicitationViewModel>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.NoContent)]
        public IActionResult Get()
        {
            var solicitations = _solicitationService.GetAll();

            if (solicitations == null)
                return NoContent();

            return Ok(solicitations);
        }
    }
}
