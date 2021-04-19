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
    public class UsersController : Controller
    {
        private readonly IUserService _userService;

        public UsersController(IUserService userService)
        {
            _userService = userService ?? throw new ArgumentNullException(nameof(userService));
        }

        [HttpGet]
        [ProducesResponseType(typeof(UserViewModel), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.NoContent)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        [Route("{id:Guid}")]
        public async Task<IActionResult> Get(Guid? id)
        {
            if (!id.HasValue)
                return BadRequest();

            var user = await _userService.GetByIdAsync(id.Value);

            if (user == null)
                return NoContent();

            return Ok(user.ToViewModel());
        }

        [HttpPost]
        [ProducesResponseType((int)HttpStatusCode.Created)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> Create([FromBody] UserDTO userDTO)
        {
            if (userDTO == null)
                return BadRequest();

            await _userService.Create(userDTO.ToUser());

            return Ok();
        }

        [HttpPut]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [Route("{id:Guid}")]
        public async Task<IActionResult> Update(Guid? id, [FromBody] UserDTO userDTO)
        {
            if (!id.HasValue || userDTO == null)
                return BadRequest();

            await _userService.Update(id.Value, userDTO.ToUser());

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

            await _userService.Delete(id.Value);

            return Ok();
        }
    }
}
