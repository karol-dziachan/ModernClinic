package modern.clinic.app.persistence.service;


import lombok.RequiredArgsConstructor;
import modern.clinic.app.persistence.entities.TimeTable;
import modern.clinic.app.persistence.repository.TimeTableRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TimeTableService {

    private final TimeTableRepository repository;

    public modern.clinic.app.persistence.entities.TimeTable createTimeTable(modern.clinic.app.persistence.entities.TimeTable timeTable) {
        return repository.save(timeTable);
    }

    public List<TimeTable> getAll() {
        return repository.findAll();
    }

    public modern.clinic.app.persistence.entities.TimeTable getById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public void updateTimeTable(Long id, modern.clinic.app.persistence.entities.TimeTable timeTable) {
        timeTable.setId(id);
        repository.save(timeTable);
    }

    public void deleteTimeTable(Long id) {
        repository.deleteById(id);
    }
}
