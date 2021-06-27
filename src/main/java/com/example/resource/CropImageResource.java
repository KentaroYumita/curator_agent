package com.example.resource;

import com.example.model.CropImage;
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

@Path("/crop_image")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class CropImageResource {
    @Inject
    MySQLPool client;

    @GET
    public Uni<List<CropImage>> getAll() {
        return CropImage.listAll();
    }

    @GET
    @Path("{id}")
    public Uni<CropImage> get(Long id){
        return CropImage.findById(id);
    }

    @GET
    @Produces("image/jpeg")
    @Path("/image/{id}")
    public Uni<Response> getImage(Long id) {
        return client
                .preparedQuery("select image from curator_agent.crop_image where id = ?")
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
}
