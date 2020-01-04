package com.example.demo.dao;

import com.example.demo.dataobjects.Audios;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AudiosDao extends JpaRepository<Audios,Integer> {
    @Query(nativeQuery = true, value = "select * from tab_audio ORDER BY RAND() LIMIT 7")
    List<Audios> Rand7();

    //查询韩语
    @Query(nativeQuery = true,value = "select * from tab_audio where kinds = '韩语'")
    List<Audios> findAllByKinds1();

    //查询国语
    @Query(nativeQuery = true,value = "select * from tab_audio where kinds = '国语'")
    List<Audios> findAllByKinds2();

    //查询英语
    @Query(nativeQuery = true,value = "select * from tab_audio where kinds = '英语'")
    List<Audios> findAllByKinds3();

    //查询日语
    @Query(nativeQuery = true,value = "select * from tab_audio where kinds = '日语'")
    List<Audios> findAllByKinds4();
}
