package com.example.demo.dao;

import com.example.demo.Demo2ApplicationTests;
import com.example.demo.dataobjects.Videos;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

import static org.junit.Assert.*;


@Component
public class VideosDaoTest extends Demo2ApplicationTests {
    @Autowired
    private VideosDao videosDao;

    //添加
    @Test
    public void testAdd(){
        for(int i = 1; i <= 12; i++){
            Videos v = new Videos("imgs/video/LOVE SCENARIO.mp4","IKON-LOVE SCENARIO","LOVE SCENARIO.jpg");
            videosDao.save(v);
        }
    }

    //获取
    @Test
    public void testGet1(){
        List<Videos> list1 = videosDao.findAllById1();
        List<Videos> list2 = videosDao.findAllById2();
        System.out.println(list1);
        System.out.println("=======================");
        System.out.println(list2);
    }
}