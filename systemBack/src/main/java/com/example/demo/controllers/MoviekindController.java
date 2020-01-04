package com.example.demo.controllers;

import com.example.demo.dao.MoviekindDao;
import com.example.demo.dataobjects.Moviekind;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class MoviekindController {
    @Autowired
    private MoviekindDao moviekindDao;

    @GetMapping("/id")
    public List<Moviekind> getId(){
        return moviekindDao.findAllById();
    }

    @GetMapping("/homerightrand")
    public List<Moviekind> getRand(){
        return moviekindDao.findAllByRand();
    }

    //查询所有
    @GetMapping("/allmovies")
    public List<Moviekind> getAll(){
        return moviekindDao.findAll();
    }


    //查询年份分类
    @GetMapping("/movienum")
    public int[] getNums(){
        int[] arr = moviekindDao.findAllByYear();
        return arr;
    }

}
