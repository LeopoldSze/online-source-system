package com.example.demo.dataobjects;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tab_slide")
public class SlideImg {
    @Id
    @GeneratedValue
    private Integer id;
    private String imgpath;
    private String page;

    public SlideImg() {
    }

    public SlideImg(String imgpath, String page) {
        this.imgpath = imgpath;
        this.page = page;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getImgpath() {
        return imgpath;
    }

    public void setImgpath(String imgpath) {
        this.imgpath = imgpath;
    }

    public String getPage() {
        return page;
    }

    public void setPage(String page) {
        this.page = page;
    }

    @Override
    public String toString() {
        return "SlideImg{" +
                "id=" + id +
                ", imgpath='" + imgpath + '\'' +
                ", page='" + page + '\'' +
                '}';
    }
}
