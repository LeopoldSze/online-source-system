package com.example.demo.controllers;


import com.example.demo.dao.UsersDao;
import com.example.demo.dataobjects.Users;
import org.hibernate.mapping.Array;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
@CrossOrigin
@RequestMapping("/users")
public class UsersController {
    @Autowired
    private UsersDao usersDao;

    //登录
    @PostMapping("/login")
    public Users getAll(@RequestBody Users u1){
        try{
            Users u2 = usersDao.findAllByAccAndPass(u1.getAcc(),u1.getPass());
            return u2;
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    //注册
    @PostMapping("/regis")
    public Users setOne(@RequestBody Users uInfo) {
        try {
            if (usersDao.findAllByAcc(uInfo.getAcc()) != null){
                return null;
            }else{
                usersDao.save(uInfo);
                return uInfo;
            }
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    //查看所有
    @GetMapping("/all")
    public List<Users> getAll(){
        return usersDao.findAll();
    }

    //根据id查询
    @GetMapping("/userinfo")
    public Users getOne(@RequestParam("uid") Integer uid){
        return usersDao.findOne(uid);
    }

    //更新用户信息
    @PostMapping("/updateuserinfo")
    public Users updOne(@RequestBody Users newinfo){
        usersDao.save(newinfo);
        return usersDao.findOne(newinfo.getId());
    }

    //删除用户
    @GetMapping("/deloneuser")
    public String delOne(@RequestParam("uid")Integer uid){
        try{
            usersDao.delete(uid);
            return "删除成功！";
        }catch(Exception e){
            e.printStackTrace();
            return "删除失败！";
        }
    }

    //根据搜索查询用户
    @GetMapping("/search")
    public List<Users> queryOne(@RequestParam("word") String word){
        List<Users> list = usersDao.findAll();
        List<Users> list2 = new ArrayList<Users>();
        for(Users u : list){
            if(u.getAcc().equals(word) || u.getPass().equals(word) || u.getPhoto().equals(word) || u.getTel().equals(word) || u.getMail().equals(word)){
                list2.add(u);
            }
        }
        return list2;
    }

    //查询VIP数量
    @GetMapping("/vipnum")
    public int[]  getNum(){
        Integer vipcount = 0;
        Integer norcount = 0;
        int[] arr = new int[2];
        List<Users> list = usersDao.findAll();
        for(Users us:list){
            norcount++;
            if(us.getVip()==1){
                vipcount++;
            }
        }
        arr[0] = norcount - vipcount;
        arr[1] = vipcount;
        return arr;
    }

}
