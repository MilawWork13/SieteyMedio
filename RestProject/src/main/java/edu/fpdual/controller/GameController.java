/**
 * @author: Artem Korzhan
 * @date: 5/13/2023
 */
package edu.fpdual.controller;

import edu.fpdual.api.dao.Game;
import edu.fpdual.persistence.connector.MySQLConnector;
import edu.fpdual.persistence.connector.manager.impl.GameManagerImpl;
import edu.fpdual.service.GameService;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import javax.ws.rs.Path;
import java.sql.SQLException;

@Path("/game")
public class GameController {
    private GameService service;

    @POST
    @Path(value = "/registerGame")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response registerGame(Game game) throws SQLException, ClassNotFoundException {
        try {
            service = new GameService(new MySQLConnector(), new GameManagerImpl());
            service.registrarPartido(game);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return Response.ok().status(Response.Status.CREATED).build();
    }


}
