package akel.kurate.server.model;

import io.quarkus.hibernate.reactive.panache.PanacheEntityBase;

import javax.persistence.*;

@Entity
@Table(name = "knavi.image_content")
public class ImageContent extends PanacheEntityBase {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @ManyToOne
    @JoinColumn(name = "exhibit_id", referencedColumnName = "id", nullable = false)
    public Exhibit exhibit;

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
