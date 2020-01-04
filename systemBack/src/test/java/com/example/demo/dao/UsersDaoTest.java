package com.example.demo.dao;

import com.example.demo.Demo2ApplicationTests;
import com.example.demo.dataobjects.Users;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.*;

@Component
public class UsersDaoTest extends Demo2ApplicationTests {
    @Autowired
    private UsersDao usersDao;

    //添加用户
//    @Test
//    public void testAdd(){
//        Users userList = new Users("Leopold-Sze","12345678","imgs/home/photo1.png","19900000000","Leopold-Sze@Gmail.com",1,"主账号",1);
//        usersDao.save(userList);
//    }
//
//    //查询用户
//    @Test
//    public void testGet(){
//        List<Users> us = usersDao.findAll();
//        for(Users u:us){
//            System.out.println(u.getAcc()+u.getTel()+u.getMail());
//        }
//
//
//    }
    //删除用户
    @Test
    public void testDel(){
        usersDao.delete(5);
    }


    //查询VIP数量
    @Test
    public void getNum(){
        int count = 0;
        List<Users> list = usersDao.findAll();
        for(Users us:list){
            if(us.getVip()==1){
                count++;
            }
        }
        System.out.println(count);
    }
}