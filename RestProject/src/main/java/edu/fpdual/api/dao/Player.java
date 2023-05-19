/**
 * @author: Artem Korzhan
 * @date: 5/10/2023
 */

package edu.fpdual.api.dao;

import lombok.*;

import java.sql.ResultSet;
import java.sql.SQLException;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
@Data
public class Player {
    private String nombre;
    private String contrasena;

    public Player(ResultSet resultSet){
        try{
            this.nombre = resultSet.getString("nombre");
            this.contrasena = resultSet.getString("contrasena");
        }catch (SQLException e){
            throw new RuntimeException(e);
        }
    }
}
