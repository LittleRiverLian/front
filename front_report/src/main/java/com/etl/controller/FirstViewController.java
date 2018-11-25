package com.etl.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping(value = "hello")
public class FirstViewController {
    @RequestMapping(method = RequestMethod.GET)
    public String index(String name, Model model) {
        model.addAttribute("message", "hello");
        model.addAttribute("name", "111111");
        return "/reportList";
    }
}