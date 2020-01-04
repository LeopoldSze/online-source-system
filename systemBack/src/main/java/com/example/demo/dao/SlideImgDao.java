package com.example.demo.dao;

import com.example.demo.dataobjects.SlideImg;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SlideImgDao extends JpaRepository<SlideImg, Integer> {
    List<SlideImg> findAllByPage(String page);
}
