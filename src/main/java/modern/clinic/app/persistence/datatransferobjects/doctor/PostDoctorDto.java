package modern.clinic.app.persistence.datatransferobjects.doctor;

import jakarta.validation.constraints.NotBlank;
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
public class PostDoctorDto {
    @NotBlank(message = "Imię nie może być puste")
    private String firstName;

    @NotBlank(message = "Nazwisko nie może być puste")
    private String lastName;

    @NotNull(message = "Id specjalizacji nie może być null")
    @Positive(message = "Id specjalizacji musi być dodatnie")
    private Long specialityId;

    private String degree;
    private String degreeShort;
}
