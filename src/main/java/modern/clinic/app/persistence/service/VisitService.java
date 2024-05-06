package modern.clinic.app.persistence.service;

import lombok.RequiredArgsConstructor;
import modern.clinic.app.persistence.entities.Visit;
import modern.clinic.app.persistence.repository.VisitRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class VisitService {

    private final VisitRepository repository;

    public modern.clinic.app.persistence.entities.Visit createVisit(modern.clinic.app.persistence.entities.Visit visit) {
        return repository.save(visit);
    }

    public List<Visit> getAll() {
        return repository.findAll();
    }

    public modern.clinic.app.persistence.entities.Visit getById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public void updateVisit(Long id, modern.clinic.app.persistence.entities.Visit visit) {
        visit.setId(id);
        repository.save(visit);
    }

    public void deleteVisit(Long id) {
        repository.deleteById(id);
    }
}
