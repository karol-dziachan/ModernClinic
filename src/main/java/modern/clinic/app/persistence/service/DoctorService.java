package modern.clinic.app.persistence.service;


import lombok.RequiredArgsConstructor;
import modern.clinic.app.persistence.datatransferobjects.doctor.*;
import modern.clinic.app.persistence.entities.Doctor;
import modern.clinic.app.persistence.entities.Mark;
import modern.clinic.app.utils.mappers.DoctorMapper;
import modern.clinic.app.persistence.repository.DoctorRepository;
import modern.clinic.app.persistence.repository.SpecialityRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class DoctorService {

    private final DoctorRepository repository;
    private final SpecialityRepository specialityRepository;

    public Doctor add(PostDoctorDto doctor) {
        var speciality = specialityRepository.findById(doctor.getSpecialityId()) .orElseThrow(() -> new RuntimeException("Nie znaleziono specjalizacji o podanym ID: " + doctor.getSpecialityId()));
        var tempDoctor = Doctor.builder()
                .firstName(doctor.getFirstName())
                .lastName(doctor.getLastName())
                .degree(doctor.getDegree())
                .degreeShort(doctor.getDegreeShort())
                .speciality(speciality)
                .build();

        return repository.save(tempDoctor);
    }

    public List<Doctor> getAll(){
        return repository.findAll();
    }

    public Doctor getById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public Doctor update(Long id, PutDoctorDto doctor) {
        var existsDoctor = repository.findById(id).orElse(null);
        var speciality = specialityRepository.findById(doctor.getSpecialityId()) .orElseThrow(() -> new RuntimeException("Nie znaleziono specjalizacji o podanym ID: " + doctor.getSpecialityId()));
        assert existsDoctor != null;
        existsDoctor.setId(id);
        existsDoctor.setFirstName(doctor.getFirstName());
        existsDoctor.setLastName(doctor.getLastName());
        existsDoctor.setDegree(doctor.getDegree());
        existsDoctor.setDegreeShort(doctor.getDegreeShort());
        existsDoctor.setSpeciality(speciality);
        return repository.save(existsDoctor);
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

    public void assignService(Long doctorId, Long serviceId) {
        repository.assignService(doctorId, serviceId);
    }

    public GetSpecialistsDto getSpecialists() {
        var doctors = repository.findAll();

        return DoctorMapper.mapToGetSpecialistsDto(doctors);
    }

    public List<GetAvailableSpecialistDto> getAvailableSpecialists(){
        var doctors = repository.findAll();

        List<GetAvailableSpecialistDto> specialistDtos = doctors.stream()
                .map(DoctorMapper::mapToGetAvailableSpecialistDto)
                .collect(Collectors.toList());

        return specialistDtos;
    }


}
