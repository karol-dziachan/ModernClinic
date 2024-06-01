package modern.clinic.app.persistence.datatransferobjects.doctor;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.*;
import modern.clinic.app.persistence.entities.Doctor;
import modern.clinic.app.persistence.entities.Mark;
import modern.clinic.app.persistence.entities.Service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonSerialize
public class PersonDto{
    private Long id;
    //degree + firstName + lastName
    private String name;
    private String speciality;
    private Long rateAvg;
    private List<Integer> services;
    private List<MarkDto> opinions;
    public String photo;
}
