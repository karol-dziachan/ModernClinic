package modern.clinic.app.persistence.service;


import lombok.RequiredArgsConstructor;
import modern.clinic.app.persistence.entities.Doctor;
import modern.clinic.app.persistence.entities.Mark;
import modern.clinic.app.persistence.repository.DoctorRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class DoctorService {

    private final DoctorRepository repository;

    public Doctor add(Doctor doctor) {
        return repository.save(doctor);
    }

    public List<Doctor> getAll(){
        return repository.findAll();
    }

    public Doctor getById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public Doctor update(Long id, Doctor doctor) {
        doctor.setId(id);
        return repository.save(doctor);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    public List<modern.clinic.app.persistence.entities.Service> getServicesByDoctor(Long id) {
        return repository.findServicesByDoctorId(id);
    }

    public List<Mark> getMarksByDoctor(Long id) {
        return repository.findMarksByDoctorId(id);
    }



}
