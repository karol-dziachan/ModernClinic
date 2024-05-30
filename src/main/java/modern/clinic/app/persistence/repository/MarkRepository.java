package modern.clinic.app.persistence.repository;

// MarkRepository.java
import modern.clinic.app.persistence.entities.Mark;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MarkRepository extends JpaRepository<Mark, Long> {
    @Query("SELECT m FROM Mark m WHERE m.doctor.id = :doctorId")
    List<Mark> findByDoctorId(Long doctorId);
}