/**
 * @author: Artem Korzhan
 * @date: 5/10/2023
 */

package edu.fpdual.api.dao;

import lombok.*;

import java.sql.Date;
import java.sql.ResultSet;
import java.sql.SQLException;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
@Data
public class Game {
    private String jugador1;
    private String jugador2;
    private String jugador3;
    private String banca;
    private float puntosJugador1;
    private float puntosJugador2;
    private float puntosJugador3;
    private float puntosBanca;
    private float apuestasTotal;
    private String fechaPartido;

    public Game(ResultSet resultSet) {
        try {
            this.jugador1 = resultSet.getString("jugador1");
            this.jugador2 = resultSet.getString("jugador2");
            this.jugador3 = resultSet.getString("jugador3");
            this.banca = resultSet.getString("banca");
            this.puntosJugador1 = resultSet.getFloat("puntosJugador1");
            this.puntosJugador2 = resultSet.getFloat("puntosJugador2");
            this.puntosJugador3 = resultSet.getFloat("puntosJugador3");
            this.puntosBanca = resultSet.getFloat("puntosBanca");
            this.apuestasTotal = resultSet.getFloat("apuestasTotal");
            this.fechaPartido = resultSet.getDate("fechaPartido").toString();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

}
