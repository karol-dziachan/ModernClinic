package modern.clinic.app.persistence.repository;

import modern.clinic.app.persistence.entities.Doctor;
import modern.clinic.app.persistence.entities.Mark;
import modern.clinic.app.persistence.entities.Service;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Long> {
    @Query("SELECT ds FROM Doctor d JOIN d.services ds WHERE d.id = :doctorId")
    List<Service> findServicesByDoctorId(Long doctorId);

    @Query("SELECT m FROM Mark m WHERE m.doctor.id = :doctorId")
    List<Mark> findMarksByDoctorId(Long doctorId);

    @Transactional
    @Modifying
    @Query(value = "INSERT INTO doctors_services (doctor_id, service_id) VALUES (:doctorId, :serviceId)", nativeQuery = true)
    void assignService(Long doctorId, Long serviceId);
}

