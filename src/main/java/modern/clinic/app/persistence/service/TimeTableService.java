package modern.clinic.app.persistence.service;


import lombok.RequiredArgsConstructor;
import modern.clinic.app.persistence.datatransferobjects.timetable.GetAvailableTimeTableDto;
import modern.clinic.app.persistence.datatransferobjects.timetable.PostTimeTableDto;
import modern.clinic.app.persistence.entities.TimeTable;
import modern.clinic.app.persistence.repository.VisitRepository;
import modern.clinic.app.utils.mappers.TimeTableMapper;
import modern.clinic.app.persistence.repository.TimeTableRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TimeTableService {

    private final TimeTableRepository repository;
    private final VisitRepository visitRepository;

    public modern.clinic.app.persistence.entities.TimeTable createTimeTable(PostTimeTableDto timeTable) {
        var temp = TimeTable.builder()
                .date(timeTable.getDate())
                .startTime(timeTable.getStartTime())
                .endTime(timeTable.getEndTime())
                .build();

        return repository.save(temp);
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

    public List<GetAvailableTimeTableDto> getAvailableTimeTables() {
        var data = repository.findAll();
        return TimeTableMapper.mapToTimeTableDtos(data);
    }

    public List<GetAvailableTimeTableDto> getAvailableTimeTablesByDoctorId(Long id) {
        var visits = visitRepository.findAll()
                .stream()
                .filter(visit -> visit.getDoctor().getId().equals(id))
                .toList();

        var data = repository.findAll().stream()
                .filter(timeTable -> timeTable.getDoctors().stream()
                        .anyMatch(doctor -> doctor.getId().equals(id)))
                .filter(timeTable -> visits.stream()
                        .noneMatch(visit -> visit.getTimeTable().getId().equals(timeTable.getId())))
                .collect(Collectors.toList());

        return TimeTableMapper.mapToTimeTableDtos(data);
    }
}
