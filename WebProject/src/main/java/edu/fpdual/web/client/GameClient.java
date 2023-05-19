/**
 * @author: Artem Korzhan
 * @date: 5/10/2023
 */
package edu.fpdual.web.client;

import edu.fpdual.web.client.dto.Game;
import jakarta.ws.rs.client.Client;
import jakarta.ws.rs.client.ClientBuilder;
import jakarta.ws.rs.client.Entity;
import jakarta.ws.rs.client.WebTarget;
import jakarta.ws.rs.core.MediaType;

public class GameClient {

    private final WebTarget webTarget;

    public GameClient() {
        Client client = ClientBuilder.newClient();
        this.webTarget = client.target("http://localhost:8081/RestProject/api/");
    }
    public Game RegistarPartido(Game partido) {

        return webTarget.path("game/registerGame")
                .request(MediaType.APPLICATION_JSON)
                .post(Entity.entity(partido, MediaType.APPLICATION_JSON), Game.class);
    }
}
