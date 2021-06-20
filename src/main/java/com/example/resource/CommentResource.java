package com.example.resource;

import com.example.model.Comment;
import io.smallrye.mutiny.Uni;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;
import java.net.URI;
import java.util.List;

@Path("/comment")
public class CommentResource {
    @GET
    public Uni<List<Comment>> getAll() {
        return Comment.listAll();
    }

    @GET
    @Path("{id}")
    public Uni<Comment> get(Long id) {
        return Comment.findById(id);
    }

    @POST
    public Uni<Response> create(Comment comment) {
        return comment.persist()
                .call(comment::flush)
                .onItem().transform(id -> URI.create("/exhibit/" + id))
                .onItem().transform(uri -> Response.created(uri).build());
    }
}