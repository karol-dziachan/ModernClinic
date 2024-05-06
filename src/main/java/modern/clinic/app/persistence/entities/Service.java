package modern.clinic.app.persistence.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "services")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Service {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="service_name", length=50, nullable=false, unique=false)
    private String name;

    @ManyToMany(mappedBy = "services")
    @JsonIgnoreProperties("services")
    @JsonIgnore
    private Set<Doctor> doctors = new HashSet<>();

    @OneToMany(mappedBy = "service", cascade = CascadeType.ALL)
    @JsonIgnoreProperties("service")
    @JsonIgnore
    private List<Visit> visits;
}
