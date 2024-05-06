package modern.clinic.app.persistence.datatransferobjects.doctor;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.*;
import modern.clinic.app.persistence.entities.Doctor;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonSerialize
public class GetAvailableSpecialistDto {
    public Long id;
    public String name;
    public List<Integer> availableOffers;
    public List<Integer> availableTime;
}
