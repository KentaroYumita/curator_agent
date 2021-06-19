package com.example.resource;

import com.example.model.Exhibit;
import io.smallrye.mutiny.Uni;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import java.util.List;

public class ExhibitResource {
    @GET
    public Uni<List<Exhibit>> getAll() {
        return Exhibit.listAll();
    }

    @GET
    @Path("{id}")
    public Uni<Exhibit> get(int id){
        return Exhibit.findById(id);
    }
}
