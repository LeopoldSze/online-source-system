package com.example.demo.dataobjects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tab_shop")
public class UsersShop {
    @Id
    @GeneratedValue
    private Integer id;
    private Integer gid;
    private Integer uid;
    private String name;
    private String src;
    private Integer price;

    public UsersShop() {
    }

    public UsersShop(Integer gid, Integer uid, String name, String src, Integer price) {
        this.gid = gid;
        this.uid = uid;
        this.name = name;
        this.src = src;
        this.price = price;
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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSrc() {
        return src;
    }

    public void setSrc(String src) {
        this.src = src;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "UsersShop{" +
                "id=" + id +
                ", gid=" + gid +
                ", uid=" + uid +
                ", name='" + name + '\'' +
                ", src='" + src + '\'' +
                ", price=" + price +
                '}';
    }
}
