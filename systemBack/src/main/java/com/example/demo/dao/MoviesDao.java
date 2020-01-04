package com.example.demo.dao;

import com.example.demo.dataobjects.Movies;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MoviesDao extends JpaRepository<Movies, Integer> {
}
