/**
 * @author: Artem Korzhan
 * @date: 5/12/2023
 */

package edu.fpdual.persistence.connector.manager.impl;

import edu.fpdual.api.dao.Player;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class PlayerManagerImpl {
    public int introducirJugador(Connection con, Player jugador){
        String sql = "INSERT INTO player(nombre, contrasena) VALUES(?, ?)";

        try(PreparedStatement stmt = con.prepareStatement(sql)){
            stmt.setString(1,jugador.getNombre());
            stmt.setString(2,jugador.getContrasena());
            return stmt.executeUpdate();
        }catch (SQLException e){
            e.printStackTrace();
            return 0;
        }
    }

    public Player buscarJugador(Connection con, String nombre){
        String sql = "SELECT * FROM player WHERE nombre = ?";

        try(PreparedStatement stmt = con.prepareStatement(sql)){
            stmt.setString(1,nombre);
            ResultSet resultSet = stmt.executeQuery();
            Player jugadorEncontrado = null;
            while (resultSet.next()){
                jugadorEncontrado = new Player(resultSet);
            }
            return jugadorEncontrado;
        }catch (SQLException e){
            e.printStackTrace();
            return null;
        }
    }
}
