package modern.clinic.app.persistence.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Entity
@Table(name = "time_table")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TimeTable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="date", nullable=false, unique=false)
    private LocalDate date;

    @Column(name="start_time", nullable=false, unique=false)
    private LocalTime startTime;

    @Column(name="end_time", nullable=false, unique=false)
    private LocalTime endTime;

    @OneToMany(mappedBy = "timeTable", cascade = CascadeType.REMOVE)
    @JsonIgnoreProperties("time_table")
    @JsonIgnore
    private List<Visit> visits;
}
