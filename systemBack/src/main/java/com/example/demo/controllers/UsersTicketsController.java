package com.example.demo.controllers;


import com.example.demo.dao.UsersTicketsDao;
import com.example.demo.dataobjects.UsersTickets;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin

public class UsersTicketsController {
    @Autowired
    private UsersTicketsDao usersTicketsDao;


    //前台获取localstorage并保存
    @PostMapping("/savetickets")
    public String saveTickets(@RequestBody UsersTickets ticketinfo){
        try{
            usersTicketsDao.save(ticketinfo);
            return "保存成功！";
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    //前台查询当前用户信息并返回到个人中心
    @GetMapping("/collection")
    public List<UsersTickets> getTickets(@RequestParam("uid") Integer uid){
        List<UsersTickets> tics = usersTicketsDao.findAllByUid(uid);
        return tics;
    }

    //后台查询所有
    @GetMapping("/ticketsall")
    public List<UsersTickets> getAll(){
        return usersTicketsDao.findAll();
    }

    //获取各个电影的票数
    @GetMapping("/kindtickets")
    public int[] gettics(){
        int[] arr = usersTicketsDao.findAllByTickets();
        return arr;
    }
}
