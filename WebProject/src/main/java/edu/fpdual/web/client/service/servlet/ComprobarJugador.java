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

@WebServlet(name="ComporbarJugador", urlPatterns = "/comprobar-jugador")
public class ComprobarJugador extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException{
        ObjectMapper mapper = new ObjectMapper();
        Player jugador = mapper.readValue(req.getReader(), Player.class);

        String result ="0";

        Player playerFound = new PlayerClient().buscarJugador(jugador.getNombre());
        if(playerFound != null){
            if((jugador.getNombre().equals(playerFound.getNombre()) && jugador.getContrasena().equals(playerFound.getContrasena()))){
                result= "1";
            }
        }
        resp.setContentType("text/plain");
        resp.getWriter().write(result);
    }
}
