package com.example.demo.dataobjects;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="tab_homeleft")
public class HomeLeft {
    @Id
    @GeneratedValue
    private Integer id;
    private String imgsrc;
    private String title;
    private String descri;
    private String relea;
    private String kinds;
    private Double score;

    public HomeLeft() {
    }

    public HomeLeft(String imgsrc, String title, String descri, String relea, String kinds, Double score) {
        this.imgsrc = imgsrc;
        this.title = title;
        this.descri = descri;
        this.relea = relea;
        this.kinds = kinds;
        this.score = score;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getImgsrc() {
        return imgsrc;
    }

    public void setImgsrc(String imgsrc) {
        this.imgsrc = imgsrc;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescri() {
        return descri;
    }

    public void setDescri(String descri) {
        this.descri = descri;
    }

    public String getRelea() {
        return relea;
    }

    public void setRelea(String relea) {
        this.relea = relea;
    }

    public String getKinds() {
        return kinds;
    }

    public void setKinds(String kinds) {
        this.kinds = kinds;
    }

    public Double getScore() {
        return score;
    }

    public void setScore(Double score) {
        this.score = score;
    }

    @Override
    public String toString() {
        return "HomeLeft{" +
                "id=" + id +
                ", imgsrc='" + imgsrc + '\'' +
                ", title='" + title + '\'' +
                ", descri='" + descri + '\'' +
                ", relea='" + relea + '\'' +
                ", kinds='" + kinds + '\'' +
                ", score=" + score +
                '}';
    }
}
