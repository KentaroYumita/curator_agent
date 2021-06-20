package com.example.model;

import io.quarkus.hibernate.reactive.panache.PanacheEntityBase;

import javax.persistence.*;

@Entity
public class ImageContent extends PanacheEntityBase {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    @ManyToOne
    @JoinColumn(name = "exhibit_id", referencedColumnName = "id", nullable = false)
    public Exhibit exhibit;

    public String name;

    @Lob
    @Column(name = "thumbnail", columnDefinition="BLOB")
    public byte[] thumbnail;

    @Lob
    @Column(name = "preview", columnDefinition="BLOB")
    public byte[] preview;

    @Lob
    @Column(name = "image", columnDefinition="MEDIUMBLOB")
    public byte[] image;
}
