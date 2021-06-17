package com.example;

import io.quarkus.hibernate.reactive.panache.PanacheEntityBase;

public class Comment extends PanacheEntityBase {
    public int exhibit_id;
    public byte[] image;
    public String comment;
}
