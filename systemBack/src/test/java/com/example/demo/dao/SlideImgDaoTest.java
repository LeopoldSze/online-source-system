package com.example.demo.dao;

import com.example.demo.Demo2ApplicationTests;
import com.example.demo.dataobjects.SlideImg;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

import static org.junit.Assert.*;

@Component
public class SlideImgDaoTest extends Demo2ApplicationTests {
    @Autowired
    private SlideImgDao slideImgDao;

    @Test
    public void testAdd(){
        for(int i = 1; i <= 6; i++){
            SlideImg imgs1 = new SlideImg("imgs/home/s"+(i-1)+".jpg","home");
            slideImgDao.save(imgs1);
        }
        for(int i = 1; i <= 5; i++){
            SlideImg imgs2 = new SlideImg("imgs/movielist/a"+i+".jpg","movielist");
            slideImgDao.save(imgs2);
        }
        for(int i = 1; i <= 5; i++){
            SlideImg imgs3 = new SlideImg("imgs/moviekind/b"+i+".jpg","moviekind");
            slideImgDao.save(imgs3);
        }

    }
}