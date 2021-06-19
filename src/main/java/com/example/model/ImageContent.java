package com.example.model;

import io.quarkus.hibernate.reactive.panache.PanacheEntityBase;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

public class ImageContent extends PanacheEntityBase {
    @ManyToOne
    @JoinColumn(name = "exhibit_id", referencedColumnName = "id", nullable = false)
    public Exhibit exhibit;
//    public int exhibit_id;

    public byte[] thumbnail;
    public byte[] preview;
    public byte[] image;
}
