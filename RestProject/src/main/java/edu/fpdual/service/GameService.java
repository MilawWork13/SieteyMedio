/**
 * @author: Artem Korzhan
 * @date: 5/10/2023
 */

package edu.fpdual.service;

import edu.fpdual.api.dao.Game;
import edu.fpdual.persistence.connector.MySQLConnector;
import edu.fpdual.persistence.connector.manager.impl.GameManagerImpl;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;

public class GameService {
    private MySQLConnector connector;
    private GameManagerImpl manager;

    public GameService(MySQLConnector connector, GameManagerImpl manager){
        this.connector = connector;
        this.manager = manager;
    }

    public int registrarPartido(Game partido) throws SQLException, ClassNotFoundException{
        Connection con = null;

        try{
            con = connector.getMySQLConnection();
            return manager.registrarPartido(con, partido);
        }finally {
            if(con!=null){
                con.close();
            }
        }
    }

}
