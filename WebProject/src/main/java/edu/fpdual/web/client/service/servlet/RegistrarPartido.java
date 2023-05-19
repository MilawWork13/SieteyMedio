/**
 * @author: Artem Korzhan
 * @date: 5/13/2023
 */
package edu.fpdual.web.client.service.servlet;

import edu.fpdual.web.client.GameClient;
import edu.fpdual.web.client.dto.Game;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.rmi.ServerException;

@WebServlet(name="RegistrarPartido", urlPatterns = "/registrar-partido")
public class RegistrarPartido extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServerException, IOException{
        Game partido = Game.builder()
                .jugador1(req.getParameter("jugador1"))
                .jugador2(req.getParameter("jugador2"))
                .jugador3(req.getParameter("jugador3"))
                .banca(req.getParameter("banca"))
                .puntosJugador1(Float.parseFloat(req.getParameter("puntosJugador1")))
                .puntosJugador2(Float.parseFloat(req.getParameter("puntosJugador2")))
                .puntosJugador3(Float.parseFloat(req.getParameter("puntosJugador3")))
                .puntosBanca(Float.parseFloat(req.getParameter("puntosBanca")))
                .apuestasTotal(Float.parseFloat(req.getParameter("apuestasTotal")))
                .build();

        new GameClient().RegistarPartido(partido);
        resp.sendRedirect("/WebProject/datosPartido/datos.jsp");
    }

}
