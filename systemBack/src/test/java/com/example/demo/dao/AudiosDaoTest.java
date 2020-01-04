package com.example.demo.dao;

import com.example.demo.Demo2ApplicationTests;
import com.example.demo.dataobjects.Audios;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

import static org.junit.Assert.*;


@Component
public class AudiosDaoTest extends Demo2ApplicationTests {
    @Autowired
    private AudiosDao audiosDao;

    @Test
    public void testAdd(){
        for(int i = 1; i <= 20; i++){
            Audios a = new Audios("Go Away","imgs/audio/2NE1 - Go Away.mp3","imgs/audio/2NE1 - Go Away.jpg","2NE1","韩语");
            audiosDao.save(a);
        }
    }

    @Test
    public void getRand(){
        System.out.println(audiosDao.Rand7());
    }

    @Test
    public void getKinds1(){
        System.out.println(audiosDao.findAllByKinds1());
    }
}