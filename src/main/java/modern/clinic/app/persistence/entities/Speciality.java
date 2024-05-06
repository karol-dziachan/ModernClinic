package modern.clinic.app.persistence.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "specialities")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Speciality {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    private Long id;

    @Column(name="speciality_name", length=50, nullable=false, unique=false)
    private String name;

    @OneToMany(mappedBy = "speciality", cascade = CascadeType.ALL)
    @JsonIgnoreProperties("speciality")
    @JsonIgnore
    private List<Doctor> doctors;
}