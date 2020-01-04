package com.example.demo.dataobjects;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tab_users")
public class Users {

    @Id
    @GeneratedValue

    private Integer id;
    private String acc;
    private String pass;
    private String photo;
    private String tel;
    private String mail;
    private Integer vip;
    private String remarks;
    private Integer cid;

    public Users() {
    }

    public Users(String acc, String pass, String photo, String tel, String mail, Integer vip, String remarks, Integer cid) {
        this.acc = acc;
        this.pass = pass;
        this.photo = photo;
        this.tel = tel;
        this.mail = mail;
        this.vip = vip;
        this.remarks = remarks;
        this.cid = cid;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getAcc() {
        return acc;
    }

    public void setAcc(String acc) {
        this.acc = acc;
    }

    public String getPass() {
        return pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public Integer getVip() {
        return vip;
    }

    public void setVip(Integer vip) {
        this.vip = vip;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    public Integer getCid() {
        return cid;
    }

    public void setCid(Integer cid) {
        this.cid = cid;
    }

    @Override
    public String toString() {
        return "Users{" +
                "id=" + id +
                ", acc='" + acc + '\'' +
                ", pass='" + pass + '\'' +
                ", photo='" + photo + '\'' +
                ", tel='" + tel + '\'' +
                ", mail='" + mail + '\'' +
                ", vip=" + vip +
                ", remarks='" + remarks + '\'' +
                ", cid=" + cid +
                '}';
    }


}
