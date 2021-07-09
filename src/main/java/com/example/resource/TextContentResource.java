package com.example.resource;

import com.example.model.Exhibit;
import com.example.model.TextContent;
import io.quarkus.panache.common.Parameters;
import io.smallrye.mutiny.Uni;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("/text_content")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class TextContentResource {
    @GET
    public Uni<List<TextContent>> getAll() {
        return TextContent.listAll();
    }

    @GET
    @Path("{id}")
    public Uni<TextContent> getById(Long id){
        return TextContent.findById(id);
    }

    @GET
    @Path("exhibit/{id}")
    public Uni<List<TextContent>> getByExhibitId(Long id){
        return TextContent.find("type = ?1 and exhibit.id = ?2"
                ,"intro",id)
                .list();
    }
}
