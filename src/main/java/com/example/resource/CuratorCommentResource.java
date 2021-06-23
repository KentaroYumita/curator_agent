package com.example.resource;

import com.example.model.CuratorComment;
import io.smallrye.mutiny.Uni;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;
import java.net.URI;
import java.util.List;

@Path("/curator_comment")
public class CuratorCommentResource {
    @GET
    public Uni<List<CuratorComment>> getAll() {
        return CuratorComment.listAll();
    }

    @GET
    @Path("{id}")
    public Uni<CuratorComment> get(Long id) {
        return CuratorComment.findById(id);
    }

    @POST
    public Uni<Response> create(CuratorComment CuratorComment) {
        return CuratorComment.persist()
                .call(CuratorComment::flush)
                .onItem().transform(id -> URI.create("/exhibit/" + id))
                .onItem().transform(uri -> Response.created(uri).build());
    }
}
