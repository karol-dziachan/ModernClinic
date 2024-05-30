package modern.clinic.app.utils.mappers;

import modern.clinic.app.persistence.datatransferobjects.visit.GetAllVisitsDto;
import modern.clinic.app.persistence.datatransferobjects.visit.GetUpcommingVisitDto;
import modern.clinic.app.persistence.datatransferobjects.visit.VisitDto;
import modern.clinic.app.persistence.entities.Visit;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

public class VisitMapper {
    public static GetAllVisitsDto mapToGetAllVisitsDto(List<Visit> visits) {
        List<GetUpcommingVisitDto> upcommingVisitDtos = visits.stream()
                .sorted(Comparator.comparing(VisitMapper::getVisitDateTime).reversed()) // Sort by date and time in descending order
                .map(VisitMapper::mapToGetUpcommingVisitDto)
                .collect(Collectors.toList());

        return GetAllVisitsDto.builder()
                .visits(upcommingVisitDtos)
                .build();
    }

    private static LocalDateTime getVisitDateTime(Visit visit) {
        return LocalDateTime.of(visit.getTimeTable().getDate(), visit.getTimeTable().getStartTime());
    }

    public static GetUpcommingVisitDto mapToGetUpcommingVisitDto(Visit visit) {
        return GetUpcommingVisitDto.builder()
                .id(visit.getId())
                .isPast(isVisitPast(visit.getTimeTable().getDate(), visit.getTimeTable().getStartTime()))
                .doctor(DoctorMapper.mapDoctorToPersonDto(visit.getDoctor()))
                .visit(mapToVisitDto(visit))
                .build();
    }

    private static VisitDto mapToVisitDto(Visit visit) {
        return VisitDto.builder()
                .id(visit.getId())
                .date(visit.getTimeTable().getDate())
                .time(visit.getTimeTable().getStartTime() + " - " + visit.getTimeTable().getEndTime()) // Concatenate start and end time
                .service(visit.getService().getName()) // you may need to adjust this depending on your Service entity structure
                .place(visit.getPlace())
                .build();
    }

    private static boolean isVisitPast(LocalDate visitDate, LocalTime visitTime) {
        LocalDateTime visitDateTime = LocalDateTime.of(visitDate, visitTime);
        return visitDateTime.isBefore(LocalDateTime.now());
    }
}
