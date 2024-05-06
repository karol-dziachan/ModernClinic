package modern.clinic.app.persistence.datatransferobjects.visit;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@JsonSerialize
public class PostVisitDto {
    private Long doctorId;
    private long timeTableId;
    private long serviceId;
    private boolean isHome;
    private String place;
    private boolean isNfz;
    private String refferalNumber;
}
