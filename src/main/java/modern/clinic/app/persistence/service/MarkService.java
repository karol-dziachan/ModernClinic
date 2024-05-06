package modern.clinic.app.persistence.service;

// MarkService.java
import lombok.RequiredArgsConstructor;
import modern.clinic.app.persistence.entities.Mark;
import org.springframework.stereotype.Service;
import modern.clinic.app.persistence.repository.MarkRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MarkService {

    private final MarkRepository repository;

    public void createMark(Mark mark) {
        repository.save(mark);
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
        repository.deleteById(id);
    }

    public List<Mark> getMarksByDoctorId(Long id) {
        return repository.findByDoctorId(id);
    }
}