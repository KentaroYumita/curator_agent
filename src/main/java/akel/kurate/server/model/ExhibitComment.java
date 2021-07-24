package akel.kurate.server.model;

import io.quarkus.hibernate.reactive.panache.PanacheEntityBase;

import javax.persistence.*;

@Entity
@Table(name = "exhibit_comment")
public class ExhibitComment extends PanacheEntityBase {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    @ManyToOne
    @JoinColumn(name = "exhibit_id", referencedColumnName = "id", nullable = false)
    public Exhibit exhibit;
    
    public String comment;

    public int image_x;
    public int image_y;
    public int image_width;
    public int image_height;
}
