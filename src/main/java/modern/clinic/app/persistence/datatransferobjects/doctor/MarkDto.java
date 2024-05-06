package modern.clinic.app.persistence.datatransferobjects.doctor;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@JsonSerialize
@Getter
@Setter
public class MarkDto {
    private Long id;
    private Long mark;
    private String title;
    private String comment;
}
