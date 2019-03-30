package com.etl.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping(value = "hello")
public class FirstViewController {
    @RequestMapping(method = RequestMethod.GET)
    public String index(String name, Model model) {
        model.addAttribute("message", "N-A-M-E");
        model.addAttribute("name", "111111");
        model.addAttribute("color", "green");

        return "/reportList";
    }


    @RequestMapping(method = RequestMethod.GET,value = "getindex1")
    public String getindex1(String name, Model model) {
        model.addAttribute("message", "N-A-M-E");
        model.addAttribute("name", "111111");
        model.addAttribute("color", "green");

        return "/getReportList";
    }

    @RequestMapping(method = RequestMethod.POST,value = "test")
    @ResponseBody
    public Map test(String name) throws InterruptedException {
        Map map = new HashMap();
        map.put("color", "green");
        map.put("status", "success");
        Thread.sleep(5000);
        return map;
    }
}