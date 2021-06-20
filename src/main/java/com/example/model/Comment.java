package com.example.model;

import io.quarkus.hibernate.reactive.panache.PanacheEntityBase;

import javax.persistence.*;

@Entity
public class Comment extends PanacheEntityBase {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    @ManyToOne
    @JoinColumn(name = "exhibit_id", referencedColumnName = "id", nullable = false)
    public Exhibit exhibit;

    @Lob
    @Column(name = "preview", columnDefinition="BLOB")
    public byte[] image;
    
    public String comment;
}
