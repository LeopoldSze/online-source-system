package com.example.demo.controllers;

import com.example.demo.dao.HomeRecInfoDao;
import com.example.demo.dataobjects.HomeRecInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class HomeRecInfoController {
    @Autowired
    private HomeRecInfoDao homeRecInfoDao;

    //查询显示
    @GetMapping("/getone")
    public HomeRecInfo getOne(){
        return homeRecInfoDao.randOne();
    }
}
