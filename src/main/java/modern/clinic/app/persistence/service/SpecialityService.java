package modern.clinic.app.persistence.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import modern.clinic.app.persistence.entities.Doctor;
import modern.clinic.app.persistence.entities.Speciality;
import modern.clinic.app.persistence.repository.SpecialityRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SpecialityService {

    private final SpecialityRepository repository;

    public Speciality create(Speciality speciality) {
        return repository.save(speciality);
    }

    public List<Speciality> getAll() {
        return repository.findAll();
    }

    public Speciality getById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public void updateSpeciality(Long id, Speciality speciality) {
        speciality.setId(id);
        repository.save(speciality);
    }

    public void deleteSpeciality(Long id) {
        repository.deleteById(id);
    }

    public List<Doctor> findDoctorsBySpecialityId(Long specialityId){
        return repository.findDoctorsBySpecialityId(specialityId);
    }

    public Speciality findByDoctorId(Long doctorId) {
        return  repository.findByDoctorId(doctorId);
    }
}
