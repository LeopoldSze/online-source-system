package com.example.demo.dataobjects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tab_movieheader")
public class MovieHeader {
    @Id
    @GeneratedValue
    private Integer id;
    private String src;
    private String name;
    private String year;
    private String kinds;
    private Double score;
    private Integer cid;

    public MovieHeader() {
    }

    public MovieHeader(String src, String name, String year, String kinds, Double score, Integer cid) {
        this.src = src;
        this.name = name;
        this.year = year;
        this.kinds = kinds;
        this.score = score;
        this.cid = cid;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getSrc() {
        return src;
    }

    public void setSrc(String src) {
        this.src = src;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
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

    public Integer getCid() {
        return cid;
    }

    public void setCid(Integer cid) {
        this.cid = cid;
    }

    @Override
    public String toString() {
        return "MovieHeader{" +
                "id=" + id +
                ", src='" + src + '\'' +
                ", name='" + name + '\'' +
                ", year='" + year + '\'' +
                ", kinds='" + kinds + '\'' +
                ", score=" + score +
                ", cid=" + cid +
                '}';
    }
}
