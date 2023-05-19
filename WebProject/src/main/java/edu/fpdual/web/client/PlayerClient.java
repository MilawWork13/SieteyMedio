/**
 * @author: Artem Korzhan
 * @date: 5/10/2023
 */

package edu.fpdual.web.client;


import edu.fpdual.web.client.dto.Player;
import jakarta.ws.rs.client.Client;
import jakarta.ws.rs.client.ClientBuilder;
import jakarta.ws.rs.client.Entity;
import jakarta.ws.rs.client.WebTarget;
import jakarta.ws.rs.core.MediaType;

public class PlayerClient {

    private final WebTarget webTarget;

    public PlayerClient(){
        Client client = ClientBuilder.newClient();
        this.webTarget = client.target("http://localhost:8081/RestProject/api/");
    }

    public Player introducirJugador(Player jugador){
        return webTarget.path("player/introducirJugador")
                .request(MediaType.APPLICATION_JSON)
                .post(Entity.entity(jugador, MediaType.APPLICATION_JSON), Player.class);
    }

    public Player buscarJugador(String nombre) {
        return webTarget.path("player/buscarJugador")
                .queryParam("nombre", nombre)
                .request(MediaType.APPLICATION_JSON)
                .get(Player.class);
    }
}
