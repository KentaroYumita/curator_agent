package com.example;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/exhibit")
public class ExampleResource {

    @GET
    public void getAllExhibits() {

    }

    @GET
    @Path("{id}")
    public void getExhibit(int id){

    }

    @POST
    public void createCropImage(){

    }

    @POST
    public void createComment(){

    }
}