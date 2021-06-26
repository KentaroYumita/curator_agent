package com.example.model;

import io.quarkus.hibernate.reactive.panache.PanacheEntityBase;

import javax.persistence.*;

@Entity
@Table(name = "crop_image")
public class CropImage extends PanacheEntityBase {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    //@ManyToOne
    //@JoinColumn(name = "exhibit_id", referencedColumnName = "id", nullable = false)
    //public Exhibit exhibit;

    @Lob
    @Column(name = "image", columnDefinition="MEDIUMBLOB")
    public byte[] image;
}
