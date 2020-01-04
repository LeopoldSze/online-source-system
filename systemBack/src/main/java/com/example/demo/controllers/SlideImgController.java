package com.example.demo.controllers;

import com.example.demo.dao.SlideImgDao;
import com.example.demo.dataobjects.SlideImg;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class SlideImgController {
    @Autowired
    private SlideImgDao slideImgDao;

    @GetMapping("/list")
    public List<SlideImg> getSlide(@RequestParam("page") String page){
        return slideImgDao.findAllByPage(page);
    }
}
