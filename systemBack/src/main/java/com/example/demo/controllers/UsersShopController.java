package com.example.demo.controllers;


import com.example.demo.dao.UsersShopDao;
import com.example.demo.dataobjects.UsersShop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class UsersShopController {
    @Autowired
    private UsersShopDao usersShopDao;

    //前台保存信息
    @PostMapping("/saveshop")
    public String saveShop(@RequestBody UsersShop shop){
        try{
            usersShopDao.save(shop);
            return "保存成功！";
        }catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }

    //前台查询当前用户信息并返回到个人中心
    @GetMapping("/queryshop")
    public List<UsersShop> getShop(@RequestParam("uid") Integer uid){
        List<UsersShop> shop = usersShopDao.findAllByUid(uid);
        return shop;
    }

    //后台查询所有
    @GetMapping("/shopall")
    public List<UsersShop> getAll(){
        return usersShopDao.findAll();
    }
}
