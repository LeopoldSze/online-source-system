package com.example.demo.dataobjects;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tab_audio")
public class Audios {
    @Id
    @GeneratedValue
    private Integer id;
    private String name;
    private String src;
    private String img;
    private String singer;
    private String kinds;

    public Audios() {
    }

    public Audios(String name, String src, String img, String singer, String kinds) {
        this.name = name;
        this.src = src;
        this.img = img;
        this.singer = singer;
        this.kinds = kinds;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getSinger() {
        return singer;
    }

    public void setSinger(String singer) {
        this.singer = singer;
    }

    public String getKinds() {
        return kinds;
    }

    public void setKinds(String kinds) {
        this.kinds = kinds;
    }

    @Override
    public String toString() {
        return "Audios{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", src='" + src + '\'' +
                ", img='" + img + '\'' +
                ", singer='" + singer + '\'' +
                ", kinds='" + kinds + '\'' +
                '}';
    }
}
