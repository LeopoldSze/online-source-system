package com.example.demo.dataobjects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tab_moviekind")
public class Moviekind {
    @Id
    @GeneratedValue
    private Integer id;
    private String imgsrc;
    private String name;
    private String actors;
    private Integer year;

    public Moviekind() {
    }

    public Moviekind(String imgsrc, String name, String actors, Integer year) {
        this.imgsrc = imgsrc;
        this.name = name;
        this.actors = actors;
        this.year = year;
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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getActors() {
        return actors;
    }

    public void setActors(String actors) {
        this.actors = actors;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    @Override
    public String toString() {
        return "Moviekind{" +
                "id=" + id +
                ", imgsrc='" + imgsrc + '\'' +
                ", name='" + name + '\'' +
                ", actors='" + actors + '\'' +
                ", year=" + year +
                '}';
    }
}
