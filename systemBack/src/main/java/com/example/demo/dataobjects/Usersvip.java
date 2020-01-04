package com.example.demo.dataobjects;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tab_vip")
public class Usersvip {
    @Id
    @GeneratedValue
    private Integer id;
    private Integer gid;
    private Integer uid;
    private String vipimg;
    private String vipinfo;
    private Double vipprice;

    public Usersvip() {
    }

    public Usersvip(Integer gid, Integer uid, String vipimg, String vipinfo, Double vipprice) {
        this.gid = gid;
        this.uid = uid;
        this.vipimg = vipimg;
        this.vipinfo = vipinfo;
        this.vipprice = vipprice;
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

    public Integer getUid() {
        return uid;
    }

    public void setUid(Integer uid) {
        this.uid = uid;
    }

    public String getVipimg() {
        return vipimg;
    }

    public void setVipimg(String vipimg) {
        this.vipimg = vipimg;
    }

    public String getVipinfo() {
        return vipinfo;
    }

    public void setVipinfo(String vipinfo) {
        this.vipinfo = vipinfo;
    }

    public Double getVipprice() {
        return vipprice;
    }

    public void setVipprice(Double vipprice) {
        this.vipprice = vipprice;
    }

    @Override
    public String toString() {
        return "Usersvip{" +
                "id=" + id +
                ", gid=" + gid +
                ", uid=" + uid +
                ", vipimg='" + vipimg + '\'' +
                ", vipinfo='" + vipinfo + '\'' +
                ", vipprice=" + vipprice +
                '}';
    }

}
