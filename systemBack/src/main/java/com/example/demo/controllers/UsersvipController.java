package com.example.demo.controllers;

import com.example.demo.dao.UsersvipDao;
import com.example.demo.dataobjects.Usersvip;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class UsersvipController {
    @Autowired
    private UsersvipDao usersvipDao;

    //前台保存信息
    @PostMapping("/savevip")
    public String savevip(@RequestBody Usersvip vip){
        try{
            usersvipDao.save(vip);
            return "保存成功！";
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    //前台查询当前用户信息并返回到个人中心
    @GetMapping("/queryvip")
    public List<Usersvip> getVip(@RequestParam("uid") Integer uid){
        List<Usersvip> vip = usersvipDao.findAllByUid(uid);
        return vip;
    }

    //后台查询所有
    @GetMapping("/vipall")
    public List<Usersvip> getAll(){
        return usersvipDao.findAll();
    }
}
