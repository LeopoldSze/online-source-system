package com.example.demo.dao;

import com.example.demo.Demo2ApplicationTests;
import com.example.demo.dataobjects.UsersTickets;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

import static org.junit.Assert.*;

@Component
public class UsersTicketsDaoTest extends Demo2ApplicationTests {
    @Autowired
    private UsersTicketsDao usersTicketsDao;



    //查询
    @Test
    public void testGet(){
        List<UsersTickets> tics = usersTicketsDao.findAllByUid(3);
        System.out.println(tics);
    }
}