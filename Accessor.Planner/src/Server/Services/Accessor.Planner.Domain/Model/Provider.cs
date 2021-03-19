using Accessor.Planner.Domain.Exceptions.Core;
using Accessor.Planner.Domain.Model;
using Accessor.Planner.Domain.Model.Commom;
using System;
using System.Collections.Generic;
using System.Text;
public Address Address { get; private set; }
public User User { get; private set; }
public List<Solicitation> Solicitations { get; private set; }


public void Update(string name, string fantasyName, string phone) {
    if (string.IsNullOrEmpty(name) || string.IsNullOrEmpty(fantasyName) || string.IsNullOrEmpty(phone))
        throw new DomainException("Value is Null");

    Name = name;
    FantasyName = fantasyName;
    Phone = phone;
}

public void Delete() {
    Activate = false;
    DeletedAt = DateTime.Now;
}
    }
}