package modern.clinic.app.persistence.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "visits")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Visit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="doctor_id", nullable=false, unique=false)
    private Doctor doctor;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="time_table_id", nullable=false, unique=false)
    private TimeTable timeTable;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="service_id", nullable=false, unique=false)
    private Service service;

    @Column(name="is_home", nullable=false, unique=false)
    private boolean isHome;

    @Column(name="place", length=200, nullable=false, unique=false)
    private String place;

    @Column(name="is_nfz",  nullable=false, unique=false)
    private boolean isNfz;

    @Column(name="refferal_number", length=50, nullable=false, unique=false)
    private String refferalNumber;
}
