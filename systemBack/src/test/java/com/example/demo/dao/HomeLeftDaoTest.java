package com.example.demo.dao;

import com.example.demo.Demo2ApplicationTests;
import com.example.demo.dataobjects.HomeLeft;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

import static org.junit.Assert.*;

@Component
public class HomeLeftDaoTest extends Demo2ApplicationTests {
    @Autowired
    private HomeLeftDao homeLeftDao;

    //添加
    @Test
    public void testAdd(){
        for(int i = 1; i <= 6; i++){
            HomeLeft left1 = new HomeLeft("imgs/home/s"+(i-1)+".jpg",
                    "复仇者联盟4：终局之战","故事发生在《复仇者联盟3 无限战争》之后，灭霸使用无限手套的力量，造成全宇宙一半的生命随机消失，有的人永远失去了挚爱和家人，复仇者联盟部分成员也因此消失了...",
                    "2019-4-24","动作、科幻、奇幻、冒险",9.5);
            homeLeftDao.save(left1);
        }
    }

    //查询
    @Test
    public void get(){
        System.out.println(homeLeftDao.findOneByRand());
    }

}