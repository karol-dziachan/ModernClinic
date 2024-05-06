package modern.clinic.app.persistence.service;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import modern.clinic.app.persistence.datatransferobjects.visit.GetAllVisitsDto;
import modern.clinic.app.persistence.datatransferobjects.visit.GetUpcommingVisitDto;
import modern.clinic.app.persistence.datatransferobjects.visit.PostVisitDto;
import modern.clinic.app.persistence.entities.TimeTable;
import modern.clinic.app.persistence.entities.Visit;
import modern.clinic.app.persistence.repository.DoctorRepository;
import modern.clinic.app.persistence.repository.ServiceRepository;
import modern.clinic.app.persistence.repository.TimeTableRepository;
import modern.clinic.app.persistence.repository.VisitRepository;
import modern.clinic.app.utils.mappers.VisitMapper;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class VisitService {

    private final VisitRepository repository;
    private final TimeTableRepository timeTableRepository;
    private final ServiceRepository serviceRepository;
    private final DoctorRepository doctorRepository;

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

    public Visit bookVisit(PostVisitDto dto){
        var doctor = doctorRepository.findById(dto.getDoctorId());

        if(doctor.isEmpty()){
            throw new EntityNotFoundException("Doctor not found");
        }

        var existsTimeTable = timeTableRepository.findById(dto.getTimeTableId());

        if(existsTimeTable.isEmpty()){
            throw new EntityNotFoundException("TimeTable not found");
        }

        var service = serviceRepository.findById(dto.getServiceId());

        if(service.isEmpty()){
            throw new EntityNotFoundException("Service not found");
        }

        var visit = Visit.builder()
                .doctor(doctor.get())
                .timeTable(existsTimeTable.get())
                .service(service.get())
                .isHome(dto.isHome())
                .place(dto.getPlace())
                .isNfz(dto.isNfz())
                .refferalNumber(dto.getRefferalNumber())
                .build();

        return repository.save(visit);
    }

    public GetAllVisitsDto getAllVisits(){
        var visits = repository.findAll();

        return VisitMapper.mapToGetAllVisitsDto(visits);
    }

    public GetUpcommingVisitDto getTheNearestVisit(){
        var visits = repository.findAll();
        sortVisitsByDateAndTime(visits);
        var nearestVisit = findFutureVisit(visits);

        return VisitMapper.mapToGetUpcommingVisitDto(nearestVisit);
    }

    public static void sortVisitsByDateAndTime(List<Visit> visits) {
        Collections.sort(visits, new Comparator<Visit>() {
            @Override
            public int compare(Visit v1, Visit v2) {
                int dateComparison = v1.getTimeTable().getDate().compareTo(v2.getTimeTable().getDate());
                if (dateComparison != 0) {
                    return dateComparison;
                }
                return v1.getTimeTable().getStartTime().compareTo(v2.getTimeTable().getStartTime());
            }
        });
    }

    private Visit findFutureVisit(List<Visit> visits) {
        LocalDate today = LocalDate.now();
        Visit futureVisit = null;
        for (Visit visit : visits) {
            LocalDate visitDate = visit.getTimeTable().getDate();
            if (visitDate.isAfter(today) || (visitDate.isEqual(today) && visit.getTimeTable().getStartTime().isAfter(LocalTime.now()))) {
                if (futureVisit == null || isBefore(visit, futureVisit)) {
                    futureVisit = visit;
                }
            }
        }
        return futureVisit;
    }

    private boolean isBefore(Visit visit1, Visit visit2) {
        LocalDate date1 = visit1.getTimeTable().getDate();
        LocalDate date2 = visit2.getTimeTable().getDate();
        if (date1.isBefore(date2)) {
            return true;
        } else if (date1.isEqual(date2)) {
            return visit1.getTimeTable().getStartTime().isBefore(visit2.getTimeTable().getStartTime());
        }
        return false;
    }
}
