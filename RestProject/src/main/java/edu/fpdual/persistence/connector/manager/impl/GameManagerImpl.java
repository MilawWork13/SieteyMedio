/**
 * @author: Artem Korzhan
 * @date: 5/13/2023
 */
package edu.fpdual.persistence.connector.manager.impl;

import edu.fpdual.api.dao.Game;
import lombok.NoArgsConstructor;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
public class GameManagerImpl {

    public int registrarPartido(Connection con, Game partido) {
        String sql = "INSERT INTO game(jugador1,jugador2,jugador3,banca,puntosJugador1,puntosJugador2,puntosJugador3,puntosBanca,apuestasTotal,fechaPartido) values (?,?,?,?,?,?,?,?,?,SYSDATE())";

        try (PreparedStatement stmt = con.prepareStatement(sql)) {
            stmt.setString(1, partido.getJugador1());
            stmt.setString(2, partido.getJugador2());
            stmt.setString(3, partido.getJugador3());
            stmt.setString(4, partido.getBanca());
            stmt.setFloat(5, partido.getPuntosJugador1());
            stmt.setFloat(6, partido.getPuntosJugador2());
            stmt.setFloat(7, partido.getPuntosJugador3());
            stmt.setFloat(8, partido.getPuntosBanca());
            stmt.setFloat(9, partido.getApuestasTotal());
            return stmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
            return 0;
        }
    }

}
