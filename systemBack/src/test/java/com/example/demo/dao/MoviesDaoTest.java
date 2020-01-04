package com.example.demo.dao;

import com.example.demo.Demo2ApplicationTests;
import com.example.demo.dataobjects.Movies;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import static org.junit.Assert.*;

@Component
public class MoviesDaoTest extends Demo2ApplicationTests {
    @Autowired
    private MoviesDao moviesDao;

    @Test
    public void testAdd(){
        for(int i = 1; i <= 7; i++){
            Movies m1 = new Movies("复仇者联盟4：终局之战","imgs/movie/m"+i+".jpg",9.5);
            moviesDao.save(m1);
        }
    }
}