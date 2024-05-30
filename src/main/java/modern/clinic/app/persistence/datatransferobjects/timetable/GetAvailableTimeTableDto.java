package modern.clinic.app.persistence.datatransferobjects.timetable;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@JsonSerialize
@Builder
public class GetAvailableTimeTableDto {
    private Long id;
    private LocalDate date;
    private String time;
}
