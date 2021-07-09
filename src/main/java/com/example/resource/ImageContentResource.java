package com.example.resource;

import com.example.model.ImageContent;
import io.smallrye.mutiny.Uni;
import io.vertx.mutiny.mysqlclient.MySQLPool;
import io.vertx.mutiny.sqlclient.Row;
import io.vertx.mutiny.sqlclient.RowIterator;
import io.vertx.mutiny.sqlclient.Tuple;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

@Path("/image_content")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ImageContentResource {
    @Inject
    MySQLPool client;

    @GET
    public Uni<List<ImageContent>> getAll() {
        return ImageContent.listAll();
    }

    @GET
    @Path("{id}")
    public Uni<ImageContent> get(Long id) {
        return ImageContent.findById(id);
    }

    @GET
    @Produces("image/jpeg")
    @Path("/image/{id}")
    public Uni<Response> getImage(Long id) {
        return client
                .preparedQuery("select image from knavi.image_content where exhibit_id = ?")
                .execute(Tuple.of(id))
                .onItem()
                .transform(rows -> {
                    RowIterator<Row> iterator = rows.iterator();
                    Row row = iterator.next();
                    byte[] imgByte = row.getDelegate().getBuffer("image").getBytes();
                    Response.ResponseBuilder response = imgByte != null ? Response.ok((Object) imgByte) : Response.status(Response.Status.NOT_FOUND);
                    return response.build();
                });
    }

    @GET
    @Produces("image/jpeg")
    @Path("/thumbnail/{id}")
    public Uni<Response> getThumbnail(Long id) {
        return client
                .preparedQuery("select thumbnail from knavi.image_content where exhibit_id = ?")
                .execute(Tuple.of(id))
                .onItem()
                .transform(rows -> {
                    RowIterator<Row> iterator = rows.iterator();
                    Row row = iterator.next();
                    byte[] imgByte = row.getDelegate().getBuffer("thumbnail").getBytes();
                    Response.ResponseBuilder response = imgByte != null ? Response.ok((Object) imgByte) : Response.status(Response.Status.NOT_FOUND);
                    return response.build();
                });
    }

    @GET
    @Produces("image/jpeg")
    @Path("/preview/{id}")
    public Uni<Response> getPreview(Long id) {
        return client
                .preparedQuery("select preview from knavi.image_content where exhibit_id = ?")
                .execute(Tuple.of(id))
                .onItem()
                .transform(rows -> {
                    RowIterator<Row> iterator = rows.iterator();
                    Row row = iterator.next();
                    byte[] imgByte = row.getDelegate().getBuffer("preview").getBytes();
                    Response.ResponseBuilder response = imgByte != null ? Response.ok((Object) imgByte) : Response.status(Response.Status.NOT_FOUND);
                    return response.build();
                });
    }
}
