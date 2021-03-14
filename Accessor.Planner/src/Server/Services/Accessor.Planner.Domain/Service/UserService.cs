using Accessor.Planner.Domain.Data.Repository;
using Accessor.Planner.Domain.Exceptions.Service;
using Accessor.Planner.Domain.Interface;
using Accessor.Planner.Domain.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace Accessor.Planner.Domain.Service
{
    public class UserService : IUserService
    {

        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository ?? throw new NullReferenceException(nameof(userRepository));
        }


        public async Task Create(User user)
        {
            UserExist(user.UserName);
            ValidEmail(user.Email);

             _userRepository.Create(user);

            await _userRepository.UnitOfWork.SaveChangesAsync().ConfigureAwait(false);
        }

        public async Task Delete(Guid id)
        {
            var user = _userRepository.GetById(id);

            if (user == null)
                throw new UserServiceException("User is Not Found");

            user.Delete();

            await _userRepository.UnitOfWork.SaveChangesAsync().ConfigureAwait(false);
        }

        public List<User> GetAll() => _userRepository.GetAll().ToList();
        
        public async Task<User> GetUserByIdAsync(Guid id)
        {
          return await _userRepository.GetByIdAsync(id).ConfigureAwait(false);
        }

        public async Task Update(Guid id, User user)
        {
            var result  = _userRepository.GetById(id);

            if (result == null)
                throw new UserServiceException("User is Not Found");

            if(user.Email != result.Email)
                ValidEmail(user.Email);

            if (user.UserName != result.UserName)
                UserExist(user.UserName);

            result.Update(user.UserName, user.Email, user.Password);

            await _userRepository.UnitOfWork.SaveChangesAsync().ConfigureAwait(false);
        }

        private void UserExist(string user)
        {
            if(_userRepository.UserExist(user))
                throw new UserServiceException("UserName already Exist");
           
        }

        private void ValidEmail(string email)
        {

            if (!Regex.IsMatch(email, @"^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$"))
                throw new UserServiceException("E-mail is inválid");

            if (_userRepository.EmailExist(email))
                throw new UserServiceException("E-mail already Exist");

        }
    }
}
