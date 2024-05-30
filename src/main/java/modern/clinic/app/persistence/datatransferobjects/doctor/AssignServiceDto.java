package modern.clinic.app.persistence.datatransferobjects.doctor;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AssignServiceDto {

    @NotNull(message = "Id usługi nie może być null")
    @Positive(message = "Id usługi musi być dodatnie")
    private Long serviceId;

    @NotNull(message = "Id specjalisty nie może być null")
    @Positive(message = "Id specjalisty musi być dodatnie")
    private Long doctorId;
}
