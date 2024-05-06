package modern.clinic.app.persistence.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

// Doctor.java
@Entity
@Table(name="doctors")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Doctor {

    @jakarta.persistence.Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    @Column(name="doctor_first_name", length=50, nullable=false, unique=false)
    private String firstName;

    @Column(name="doctor_last_name", length=50, nullable=false, unique=false)
    private String lastName;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="speciality_id", nullable=false, unique=false)
    private Speciality speciality;

    @ManyToMany(cascade = {CascadeType.ALL})
    @JoinTable(name = "doctors_services",
            joinColumns = @JoinColumn(name = "doctor_id"),
            inverseJoinColumns = @JoinColumn(name = "service_id"))
    @JsonIgnoreProperties("doctors")
    @JsonIgnore
    private Set<Service> services = new HashSet<>();

    @OneToMany(mappedBy = "doctor", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Mark> marks;
}