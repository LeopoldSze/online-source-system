package com.example.demo.dao;

import com.example.demo.dataobjects.MovieHeader;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieHeaderDao extends JpaRepository<MovieHeader,Integer> {
}
