package com.example.resource;

import com.example.model.ExhibitComment;
import io.smallrye.mutiny.Uni;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.net.URI;
import java.util.List;

@Path("/exhibit_comment")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ExhibitCommentResource {
    @GET
    public Uni<List<ExhibitComment>> getAll() {
        return ExhibitComment.listAll();
    }

    @GET
    @Path("{id}")
    public Uni<ExhibitComment> get(Long id) {
        return ExhibitComment.findById(id);
    }

    @POST
    public Uni<Response> create(ExhibitComment ExhibitComment) {
        return ExhibitComment.persist()
                .call(ExhibitComment::flush)
                .onItem().transform(id -> URI.create("/exhibit_comment/" + id))
                .onItem().transform(uri -> Response.created(uri).build());
    }
}
