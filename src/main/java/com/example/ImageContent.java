package com.example;

import io.quarkus.hibernate.reactive.panache.PanacheEntityBase;

public class ImageContent extends PanacheEntityBase {
    public int exhibit_id;
    public byte[] thumbnail;
    public byte[] preview;
    public byte[] image;
}
