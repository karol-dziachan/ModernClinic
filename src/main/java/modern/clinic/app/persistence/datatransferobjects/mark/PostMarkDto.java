package modern.clinic.app.persistence.datatransferobjects.mark;

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
public class PostMarkDto {

    @NotBlank(message = "Tytuł nie może być pusty")
    private String title;

    @NotBlank(message = "Opis nie może być pusty")
    private String description;

    @NotBlank(message = "Komentarz nie może być pusty")
    private String comment;

    @NotNull(message = "Id specjalisty nie może być null")
    @Positive(message = "Id specjalisty musi być dodatnie")
    private Long doctorId;

    private Long mark;
}
