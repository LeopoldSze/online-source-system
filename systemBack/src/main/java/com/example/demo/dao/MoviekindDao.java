package com.example.demo.dao;

import com.example.demo.dataobjects.Moviekind;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MoviekindDao extends JpaRepository<Moviekind, Integer> {
    @Query(nativeQuery = true, value = "select * from tab_moviekind where id BETWEEN 1 and 25")
    List<Moviekind> findAllById();

    @Query(nativeQuery = true, value = "SELECT * FROM tab_moviekind ORDER BY RAND() LIMIT 8")
    List<Moviekind> findAllByRand();

    @Query(nativeQuery = true, value = "select  COUNT(*) from tab_moviekind GROUP BY year ")
    int[] findAllByYear();
}
