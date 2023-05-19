/**
 * @author: Artem Korzhan
 * @date: 5/12/2023
 */

package edu.fpdual.controller;

import edu.fpdual.api.dao.Player;
import edu.fpdual.persistence.connector.MySQLConnector;
import edu.fpdual.persistence.connector.manager.impl.PlayerManagerImpl;
import edu.fpdual.service.PlayerService;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.sql.SQLException;

@Path("/player")
public class PlayerController {

    private PlayerService service;

    @POST
    @Path("/introducirJugador")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response introducirJugador(Player jugador) throws SQLException, ClassNotFoundException {
        service = new PlayerService(new MySQLConnector(), new PlayerManagerImpl());
        try {
            service.introducirJugador(jugador);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return Response.ok().status(Response.Status.CREATED).build();

    }

    @GET
    @Path("/buscarJugador")
    @Consumes(MediaType.TEXT_PLAIN)
    @Produces(MediaType.APPLICATION_JSON)
    public Response buscarJugador(@QueryParam("nombre") String nombre) throws SQLException, ClassNotFoundException {
        service = new PlayerService(new MySQLConnector(), new PlayerManagerImpl());
        Player playerFound = new Player();
        try {
            playerFound = service.buscarJugador(nombre);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return Response.ok().entity(playerFound).status(Response.Status.CREATED).build();
    }

}
