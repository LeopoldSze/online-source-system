package com.example.demo.dao;

import com.example.demo.Demo2ApplicationTests;
import com.example.demo.dataobjects.Moviekind;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.junit.Assert.*;

@Component
public class MoviekindDaoTest extends Demo2ApplicationTests {
    @Autowired
    private MoviekindDao moviekindDao;

    @Test
    public void testAdd(){
        for(int i = 1; i <= 25; i++){
            Moviekind mk = new Moviekind("imgs/moviekind/c1.jpg","海王","杰森·莫玛 艾梅柏·希尔德",2018);
            moviekindDao.save(mk);
        }
    }

    @Test
    public void testGet(){
        List<Moviekind> mk = moviekindDao.findAllById();
        System.out.println(mk);
    }

    @Test
    public void testNum(){
        int[] arr = moviekindDao.findAllByYear();
        Map<String, Integer> map = new HashMap<String,Integer>();
        map.put("2017",arr[0]);
        System.out.println(map);
    }
}