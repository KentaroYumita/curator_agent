package com.example.model;

import io.quarkus.hibernate.reactive.panache.PanacheEntityBase;

import javax.persistence.*;

@Entity
@Table(name = "knavi.text_content")
public class TextContent extends PanacheEntityBase {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    public String type;

    @ManyToOne
    @JoinColumn(name = "exhibit", referencedColumnName = "id", nullable = false)
    public Exhibit exhibit;

    public String lang;
    public String context;
}
