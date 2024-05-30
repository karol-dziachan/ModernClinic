package modern.clinic.app.persistence.datatransferobjects.doctor;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonSerialize
public class GetSpecialistsDto {
    private List<PersonDto> persons;
}

