package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.service.UserService;

@RestController
public class IndexController {
	@Autowired
    private UserService userService;

    @RequestMapping("user/getAll")
    public List<User> getAll() {
        return userService.getAll();
    }

    @RequestMapping("user/getById")
    public User getById(@RequestParam(value = "id") Integer id) {
        return userService.getById(id);
    }
}
