package modern.clinic.app.persistence.datatransferobjects.visit;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.*;
import modern.clinic.app.persistence.datatransferobjects.doctor.PersonDto;

import java.time.LocalDate;
import java.time.LocalTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonSerialize
public class GetUpcommingVisitDto {
    private Long id;
    private boolean isPast;
    private PersonDto doctor;
    private VisitDto visit;
}

