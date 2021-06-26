package com.example.model;

import io.quarkus.hibernate.reactive.panache.PanacheEntityBase;

import javax.persistence.*;

@Entity
@Table(name = "curator_comment")
public class CuratorComment extends PanacheEntityBase {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    @ManyToOne
    @JoinColumn(name = "crop_image_id", referencedColumnName = "id", nullable = false)
    public CropImage crop_image;
    
    public String comment;
}
