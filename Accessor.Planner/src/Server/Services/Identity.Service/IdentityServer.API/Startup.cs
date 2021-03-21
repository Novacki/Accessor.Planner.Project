using AutoMapper;
using IdentityServer.API.Application.Extentions;
using IdentityServer.API.Application.Resources;
using IdentityServer.API.Infrastructure.Data;
using IdentityServer.API.Infrastructure.Model;
using IdentityServer.API.Settings;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IdentityServer.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers();
            ConfigureSwagger(services);

            services.AddDbContext<ApplicationDataContext>(options =>
             options.UseSqlServer(Configuration.GetConnectionString("Default")));

            IdentityConfiguration(services);
            MapperConfiguration(services);
       
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "IdentityServer.API v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuth();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }

        public void IdentityConfiguration(IServiceCollection services)
        {
            services.AddIdentityCore<User>().AddRoles<Role>()
                .AddEntityFrameworkStores<ApplicationDataContext>()
                    .AddDefaultTokenProviders();

            services.AddIdentity<User, Role>(options =>
            {
                options.Password.RequiredLength = 8;
                options.Password.RequireNonAlphanumeric = true;
                options.Password.RequireUppercase = true;
                options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(1d);
                options.Lockout.MaxFailedAccessAttempts = 5;
            });

            services.Configure<JwtSettings>(Configuration.GetSection("Jwt"));
            var jwtSettings = Configuration.GetSection("Jwt").Get<JwtSettings>();
            services.AddAuth(jwtSettings);
        }

        public void MapperConfiguration(IServiceCollection services)
        {
            var config = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<UserSignUpResource, User>()
                    .ForMember(u => u.UserName, opt => opt.MapFrom(ur => ur.Email)); ;
            });
            IMapper mapper = config.CreateMapper();
            services.AddSingleton(mapper);
        }


        public void ConfigureSwagger(IServiceCollection services)
        {
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "IdentityServer.API", Version = "v1" });
                c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
                {
                    Description = "JWT containing userid claim",
                    Name = "Authorization",
                    In = ParameterLocation.Header,
                    Type = SecuritySchemeType.ApiKey,
                });
                var security = new OpenApiSecurityRequirement
                    {
                        {
                            new OpenApiSecurityScheme
                                {
                                    Reference = new OpenApiReference
                                        {
                                            Id = "Bearer",
                                            Type = ReferenceType.SecurityScheme
                                        },
                                    UnresolvedReference = true
                                },
                            new List<string>()
                        }
                    };
                c.AddSecurityRequirement(security);
            });
        }
    }
}
