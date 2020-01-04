package com.example.demo.controllers;

import com.example.demo.dao.AudiosDao;
import com.example.demo.dataobjects.Audios;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class AudiosController {
    @Autowired
    private AudiosDao audiosDao;

    //获取随机7个
    @GetMapping("/randaudio")
    public List<Audios> getRand(){
        return audiosDao.Rand7();
    }

    //获取所有
    @GetMapping("/allaudio")
    public List<Audios> getAll(){
        return audiosDao.findAll();
    }

    //根据类别获取
        //韩语
        @GetMapping("/kinds1")
        public List<Audios> getKinds1(){
            return audiosDao.findAllByKinds1();
        }

        //国语
        @GetMapping("/kinds2")
        public List<Audios> getKinds2(){
            return audiosDao.findAllByKinds2();
        }

        //英语
        @GetMapping("/kinds3")
        public List<Audios> getKinds3(){
            return audiosDao.findAllByKinds3();
        }

        //日语
        @GetMapping("/kinds4")
        public List<Audios> getKinds4(){
            return audiosDao.findAllByKinds4();
        }

    //查询所有音乐数量
    @GetMapping("/audionum")
    public int getNum(){
        Integer count = 0;
        List<Audios> list = audiosDao.findAll();
        for(Audios a: list){
            count++;
        }
        return count;
    }
}
