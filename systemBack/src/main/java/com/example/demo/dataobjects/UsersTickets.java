package com.example.demo.dataobjects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tab_tickets")
public class UsersTickets {

    @Id
    @GeneratedValue
    private Integer id;
    private Integer gid;
    private String moviename;
    private String seats;
    private Integer tickets;
    private String moviedate;
    private String movietime;
    private String movieimg;
    private Double money;
    private Integer uid;

    public UsersTickets() {
    }

    public UsersTickets(Integer gid, String moviename, String seats, Integer tickets, String moviedate, String movietime, String movieimg, Double money, Integer uid) {
        this.gid = gid;
        this.moviename = moviename;
        this.seats = seats;
        this.tickets = tickets;
        this.moviedate = moviedate;
        this.movietime = movietime;
        this.movieimg = movieimg;
        this.money = money;
        this.uid = uid;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getGid() {
        return gid;
    }

    public void setGid(Integer gid) {
        this.gid = gid;
    }

    public String getMoviename() {
        return moviename;
    }

    public void setMoviename(String moviename) {
        this.moviename = moviename;
    }

    public String getSeats() {
        return seats;
    }

    public void setSeats(String seats) {
        this.seats = seats;
    }

    public Integer getTickets() {
        return tickets;
    }

    public void setTickets(Integer tickets) {
        this.tickets = tickets;
    }

    public String getMoviedate() {
        return moviedate;
    }

    public void setMoviedate(String moviedate) {
        this.moviedate = moviedate;
    }

    public String getMovietime() {
        return movietime;
    }

    public void setMovietime(String movietime) {
        this.movietime = movietime;
    }

    public String getMovieimg() {
        return movieimg;
    }

    public void setMovieimg(String movieimg) {
        this.movieimg = movieimg;
    }

    public Double getMoney() {
        return money;
    }

    public void setMoney(Double money) {
        this.money = money;
    }

    public Integer getUid() {
        return uid;
    }

    public void setUid(Integer uid) {
        this.uid = uid;
    }

    @Override
    public String toString() {
        return "UsersTickets{" +
                "id=" + id +
                ", gid=" + gid +
                ", moviename='" + moviename + '\'' +
                ", seats='" + seats + '\'' +
                ", tickets=" + tickets +
                ", moviedate='" + moviedate + '\'' +
                ", movietime='" + movietime + '\'' +
                ", movieimg='" + movieimg + '\'' +
                ", money=" + money +
                ", uid=" + uid +
                '}';
    }
}
