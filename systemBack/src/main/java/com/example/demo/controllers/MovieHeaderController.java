package com.example.demo.controllers;

import com.example.demo.dao.MovieHeaderDao;
import com.example.demo.dataobjects.MovieHeader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class MovieHeaderController {
    @Autowired
    private MovieHeaderDao movieHeaderDao;

    @GetMapping("/movieone")
    public MovieHeader getOne(@RequestParam("id") Integer id){
        return movieHeaderDao.findOne(id);
    }
}
