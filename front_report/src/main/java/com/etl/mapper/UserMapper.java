package com.etl.mapper;


import com.etl.bean.User;

import java.util.List;

public interface UserMapper {

    void save(User user);

    void update(User user);

    void delete(int id);

    User findById(int id);

    List<User> findAll();

}