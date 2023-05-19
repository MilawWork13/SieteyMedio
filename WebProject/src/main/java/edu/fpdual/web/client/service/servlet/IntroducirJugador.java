/**
 * @author: Artem Korzhan
 * @date: 5/12/2023
 */
package edu.fpdual.web.client.service.servlet;

import com.fasterxml.jackson.databind.ObjectMapper;
import edu.fpdual.web.client.PlayerClient;
import edu.fpdual.web.client.dto.Player;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

@WebServlet(name="IntroducirJugador", urlPatterns = "/introducir-jugador")
public class IntroducirJugador extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        ObjectMapper mapper = new ObjectMapper();
        Player player = mapper.readValue(req.getReader(), Player.class);

        String result = "0";
        Player playerFound = new PlayerClient().buscarJugador(player.getNombre());
        if (playerFound != null) {
            if (player.getNombre().equals(playerFound.getNombre())) {
                result = "1";
            }
        }
        if (result.equals("0")) {
            new PlayerClient().introducirJugador(player);
        }
        resp.sendRedirect("/WebProject/index.jsp");
    }
    }