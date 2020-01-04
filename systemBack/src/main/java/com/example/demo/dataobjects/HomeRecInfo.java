package com.example.demo.dataobjects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tab_homerec")
public class HomeRecInfo {
    @Id
    @GeneratedValue
    private Integer id;
    private String recsrc;
    private String name;
    private String background;
    private String awardsrc;

    public HomeRecInfo() {
    }

    public HomeRecInfo(String recsrc, String name, String background, String awardsrc) {
        this.recsrc = recsrc;
        this.name = name;
        this.background = background;
        this.awardsrc = awardsrc;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getRecsrc() {
        return recsrc;
    }

    public void setRecsrc(String recsrc) {
        this.recsrc = recsrc;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBackground() {
        return background;
    }

    public void setBackground(String background) {
        this.background = background;
    }

    public String getAwardsrc() {
        return awardsrc;
    }

    public void setAwardsrc(String awardsrc) {
        this.awardsrc = awardsrc;
    }

    @Override
    public String toString() {
        return "HomeRecInfo{" +
                "id=" + id +
                ", recsrc='" + recsrc + '\'' +
                ", name='" + name + '\'' +
                ", background='" + background + '\'' +
                ", awardsrc='" + awardsrc + '\'' +
                '}';
    }
}
