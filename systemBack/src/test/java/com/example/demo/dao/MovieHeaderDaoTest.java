package com.example.demo.dao;

import com.example.demo.Demo2ApplicationTests;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import static org.junit.Assert.*;

@Component
public class MovieHeaderDaoTest extends Demo2ApplicationTests {
    @Autowired
    private MovieHeaderDao movieHeaderDao;

    @Test
    public void testGet(){
        System.out.println(movieHeaderDao.findOne(1));
    }
}