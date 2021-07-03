package com.example.resource;

import com.example.model.Exhibit;
import io.smallrye.mutiny.Uni;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("/exhibit")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ExhibitResource {
    @GET
    public Uni<List<Exhibit>> getAll() {
        return Exhibit.listAll();
    }

    @GET
    @Path("{id}")
    public Uni<Exhibit> get(Long id) {
        return Exhibit.findById(id);
    }
}
