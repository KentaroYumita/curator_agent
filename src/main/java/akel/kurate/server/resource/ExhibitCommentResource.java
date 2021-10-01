package akel.kurate.server.resource;

import akel.kurate.server.model.ExhibitComment;
import io.smallrye.mutiny.Uni;
import io.vertx.mutiny.mysqlclient.MySQLPool;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.net.URI;
import java.util.List;

@Path("/kurate/comment")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ExhibitCommentResource {
    @Inject
    MySQLPool client;

    @GET
    public Uni<List<ExhibitComment>> getAll() {
        return ExhibitComment.listAll();
    }

    @GET
    @Path("{id}")
    public Uni<List<ExhibitComment>> get(Long id) {
        return ExhibitComment.find("exhibit.id = ?1",id).list();
    }

    @POST
    public Uni<Response> create(ExhibitComment exhibitComment) {
        return exhibitComment.persist()
                .call(exhibitComment::flush)
                .onItem().transform(id -> URI.create("/kurate/comment" + id))
                .onItem().transform(uri -> Response.created(uri).build());
    }

    @PUT
    public Uni<Response> update(ExhibitComment exhibitComment){
        return client.preparedQuery("UPDATE exhibit_comment SET " +
                "id = \'"+exhibitComment.id+"\'," +
                "comment = \'"+exhibitComment.comment+"\'," +
                "image_x = \'"+exhibitComment.image_x+"\',"+
                "image_y = \'"+exhibitComment.image_y+"\',"+
                "image_width = \'"+exhibitComment.image_width+"\',"+
                "image_height = \'"+exhibitComment.image_height+"\'"+
                " WHERE id = "+exhibitComment.id)
                .execute()
                .onItem()
                .transform(status ->  Response.ok().build());
    }

    @DELETE
    @Path("{id}")
    public Uni<Response> delete(Long id) {
        return ExhibitComment.delete("id", id)
                .onItem().transform(deleted -> deleted > 0 ? Response.Status.NO_CONTENT : Response.Status.NOT_FOUND)
                .onItem().transform(status -> Response.status(status).build());
    }
}
