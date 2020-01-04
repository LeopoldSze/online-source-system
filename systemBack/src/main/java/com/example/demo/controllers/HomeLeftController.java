package com.example.demo.controllers;


import com.example.demo.dao.HomeLeftDao;
import com.example.demo.dataobjects.HomeLeft;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class HomeLeftController {
    @Autowired
    private HomeLeftDao homeLeftDao;

    //查询
    @GetMapping("/query")
    public HomeLeft getOneRand(){
        return homeLeftDao.findOneByRand();
    }

}
