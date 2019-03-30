package com.etl.bean;

import java.util.List;

public class NewUser   {

    public String name;
    List<User> users ;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }
}
