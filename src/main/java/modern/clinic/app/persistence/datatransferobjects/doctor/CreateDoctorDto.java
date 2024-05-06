package modern.clinic.app.persistence.datatransferobjects.doctor;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CreateDoctorDto {
    private String firstName;
    private String lastName;
    private int serviceId;
}
