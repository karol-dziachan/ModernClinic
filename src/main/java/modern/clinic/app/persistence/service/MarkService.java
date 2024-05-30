package modern.clinic.app.persistence.service;

// MarkService.java
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import modern.clinic.app.persistence.datatransferobjects.mark.PostMarkDto;
import modern.clinic.app.persistence.entities.Mark;
import modern.clinic.app.persistence.repository.DoctorRepository;
import org.springframework.stereotype.Service;
import modern.clinic.app.persistence.repository.MarkRepository;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MarkService {

    private final MarkRepository repository;
    private final DoctorRepository doctorRepository;

    public void createMark(PostMarkDto mark) {
        var doctor = doctorRepository.findById(mark.getDoctorId())  .orElseThrow(() -> new RuntimeException("Nie znaleziono specjalisty o podanym ID: " + mark.getDoctorId()));

        var tempMark = Mark.builder()
                        .title(mark.getTitle())
                        .description(mark.getDescription())
                        .comment(mark.getComment())
                        .doctor(doctor)
                .mark(mark.getMark())
                .build();

        repository.save(tempMark);
    }

    public List<Mark> getAll() {
        return repository.findAll();
    }

    public Mark getById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public void updateMark(Long id, Mark mark) {
        mark.setId(id);
        repository.save(mark);
    }

    public void deleteMark(Long id) {
        Optional<Mark> markOptional = repository.findById(id);
        if (markOptional.isPresent()) {
            repository.deleteById(id);
        } else {
            throw new EntityNotFoundException("Mark with id " + id + " not found");
        }
    }

    public List<Mark> getMarksByDoctorId(Long id) {
        return repository.findByDoctorId(id);
    }
}