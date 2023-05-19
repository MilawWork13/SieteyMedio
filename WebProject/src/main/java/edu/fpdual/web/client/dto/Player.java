/**
 * @author: Artem Korzhan
 * @date: 5/10/2023
 */

package edu.fpdual.web.client.dto;

import jakarta.xml.bind.annotation.XmlRootElement;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@XmlRootElement
public class Player {
    private String nombre;
    private String contrasena;
}