package com.example.resource;

import com.example.model.Exhibit;
import com.example.model.ImageContent;
import io.smallrye.mutiny.Uni;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import java.util.List;

public class ImageContentResource {
    @GET
    public Uni<List<ImageContent>> getAll() {
        return ImageContent.listAll();
    }

    @GET
    @Path("{id}")
    public Uni<ImageContent> get(int id){
        return ImageContent.findById(id);
    }
}
