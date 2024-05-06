package modern.clinic.app.persistence.repository;

// SpecialityRepository.java
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import modern.clinic.app.persistence.entities.Doctor;
import modern.clinic.app.persistence.entities.Speciality;

import java.util.List;

@Repository
public interface SpecialityRepository extends JpaRepository<Speciality, Long> {
    @Query("SELECT d FROM Doctor d WHERE d.speciality.id = :specialityId")
    List<Doctor> findDoctorsBySpecialityId(Long specialityId);

    @Query("SELECT s FROM Speciality s JOIN s.doctors d WHERE d.id = :doctorId")
    Speciality findByDoctorId(Long doctorId);
}