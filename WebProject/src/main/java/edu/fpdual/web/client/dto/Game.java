/**
 * @author: Artem Korzhan
 * @date: 5/10/2023
 */

package edu.fpdual.web.client.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.xml.bind.annotation.XmlRootElement;
import lombok.*;

import java.util.Date;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@XmlRootElement
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

    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd")
    private Date fechaPartido;

}
