package modern.clinic.app.persistence.datatransferobjects.service;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PostServiceDto {

    @NotBlank(message = "Nazwa nie może być pusta")
    private String name;
}
