package com.example.demo.controllers;

import com.example.demo.dao.UsersCardsDao;
import com.example.demo.dataobjects.UsersCards;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class UsersCardsController {
    @Autowired
    private UsersCardsDao usersCardsDao;


    //前台保存信息
    @PostMapping("/savecards")
    public String saveCards(@RequestBody UsersCards cardsinfo){
        try{
            usersCardsDao.save(cardsinfo);
            return "保存成功！";
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    //前台查询当前用户信息并返回到个人中心
    @GetMapping("/querycards")
    public List<UsersCards> getCards(@RequestParam("uid") Integer uid){
        List<UsersCards> cards = usersCardsDao.findAllByUid(uid);
        return cards;
    }

    //后台查询所有
    @GetMapping("/cardsall")
    public List<UsersCards> getAll(){
        return usersCardsDao.findAll();
    }
}
