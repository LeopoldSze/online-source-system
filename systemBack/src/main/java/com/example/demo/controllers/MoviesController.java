package com.example.demo.controllers;

import com.example.demo.dao.MoviesDao;
import com.example.demo.dataobjects.Movies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class MoviesController {
    @Autowired
    private MoviesDao moviesDao;

    @GetMapping("/movies")
    public List<Movies> getMovies(){
        return moviesDao.findAll();
    }
}
