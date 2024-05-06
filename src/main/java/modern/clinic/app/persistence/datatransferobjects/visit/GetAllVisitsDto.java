package modern.clinic.app.persistence.datatransferobjects.visit;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonSerialize
public class GetAllVisitsDto {
    private List<GetUpcommingVisitDto> visits;
}
