package com.example.demo.dao;

import com.example.demo.Demo2ApplicationTests;
import com.example.demo.dataobjects.UsersCards;
import org.junit.Test;
import org.omg.CORBA.PUBLIC_MEMBER;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import static org.junit.Assert.*;

@Component
public class UsersCardsDaoTest extends Demo2ApplicationTests {
    @Autowired
    public UsersCardsDao usersCardsDao;

    @Test
    public void testAdd(){
        UsersCards card = new UsersCards(202,"19.9半年卡","imgs/movie/card.png",19.9,3);
        usersCardsDao.save(card);
    }

}