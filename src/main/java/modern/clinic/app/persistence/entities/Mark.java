package modern.clinic.app.persistence.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;

//Mark.java
@Entity
@Table(name = "marks")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Mark {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="title", length=50, nullable=false, unique=false)
    private String title;

    @Column(name="description", length=50, nullable=false, unique=false)
    private String description;

    @Column(name="comment", length=50, nullable=false, unique=false)
    private String comment;

    @Column(name="mark", nullable=false, unique=false)
    private Long mark;

    @ManyToOne
    @JoinColumn(name="doctor_id", nullable=false)
    @JsonIgnoreProperties("marks")
    @JsonIgnore
    private Doctor doctor;
}
