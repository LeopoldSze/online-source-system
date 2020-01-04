package com.example.demo.dao;

import com.example.demo.dataobjects.UsersTickets;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UsersTicketsDao extends JpaRepository<UsersTickets, Integer> {
    List<UsersTickets> findAllByUid(Integer uid);

    @Query(nativeQuery = true, value = "SELECT tickets from tab_tickets ORDER BY movieimg")
    int[] findAllByTickets();
}
