package com.example.demo.dataobjects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tab_cards")
public class UsersCards {
    @Id
    @GeneratedValue
    private Integer id;
    private Integer gid;
    private String cardinfo;
    private String cardimg;
    private Double cardprice;
    private Integer uid;

    public UsersCards() {
    }

    public UsersCards(Integer gid, String cardinfo, String cardimg, Double cardprice, Integer uid) {
        this.gid = gid;
        this.cardinfo = cardinfo;
        this.cardimg = cardimg;
        this.cardprice = cardprice;
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

    public String getCardinfo() {
        return cardinfo;
    }

    public void setCardinfo(String cardinfo) {
        this.cardinfo = cardinfo;
    }

    public String getCardimg() {
        return cardimg;
    }

    public void setCardimg(String cardimg) {
        this.cardimg = cardimg;
    }

    public Double getCardprice() {
        return cardprice;
    }

    public void setCardprice(Double cardprice) {
        this.cardprice = cardprice;
    }

    public Integer getUid() {
        return uid;
    }

    public void setUid(Integer uid) {
        this.uid = uid;
    }

    @Override
    public String toString() {
        return "UsersCards{" +
                "id=" + id +
                ", gid=" + gid +
                ", cardinfo='" + cardinfo + '\'' +
                ", cardimg='" + cardimg + '\'' +
                ", cardprice=" + cardprice +
                ", uid=" + uid +
                '}';
    }
}
