package com.example.demo.controllers;

import com.example.demo.dao.VideosDao;
import com.example.demo.dataobjects.Videos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class VideosController {
    @Autowired
    private VideosDao videosDao;

    //查询
    @GetMapping("/video1")
    public List<Videos> getList1(){
        return videosDao.findAllById1();
    }

    @GetMapping("/video2")
    public List<Videos> getList2(){
        return videosDao.findAllById2();
    }

    //查询所有

}
