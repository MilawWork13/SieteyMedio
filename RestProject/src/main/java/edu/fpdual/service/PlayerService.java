/**
 * @author: Artem Korzhan
 * @date: 5/10/2023
 */
package edu.fpdual.service;

import edu.fpdual.api.dao.Player;
import edu.fpdual.persistence.connector.MySQLConnector;
import edu.fpdual.persistence.connector.manager.impl.PlayerManagerImpl;

import java.sql.Connection;
import java.sql.SQLException;


public class PlayerService {
    private MySQLConnector connector;
    private PlayerManagerImpl playerManager;

    public PlayerService(MySQLConnector connector, PlayerManagerImpl playerManager){
        this.connector = connector;
        this.playerManager = playerManager;
    }

    public int introducirJugador(Player jugador) throws SQLException, ClassNotFoundException{
        Connection con = null;

        try{
            con = connector.getMySQLConnection();
            return playerManager.introducirJugador(con,jugador);
        }finally {
            if(con!=null){
                con.close();
            }
        }
    }

    public Player buscarJugador(String nombre) throws  SQLException, ClassNotFoundException{
        Connection con = null;

        try{
            con = connector.getMySQLConnection();
            return playerManager.buscarJugador(con,nombre);
        }finally {
            if(con!=null){
                con.close();
            }
        }
    }
}
