package modern.clinic.app.persistence.datatransferobjects.visit;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonSerialize
public class VisitDto{
    private Long id;
    private LocalDate date;
    private String time;
    private String service;
    private String place;
}
