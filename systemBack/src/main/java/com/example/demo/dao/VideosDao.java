package com.example.demo.dao;

import com.example.demo.dataobjects.Videos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface VideosDao extends JpaRepository<Videos,Integer> {
    @Query(nativeQuery = true, value = "select * from tab_videos where id BETWEEN 1 and 6")
    List<Videos> findAllById1();

    @Query(nativeQuery = true, value = "select * from tab_videos where id BETWEEN 7 and 12")
    List<Videos> findAllById2();
}
