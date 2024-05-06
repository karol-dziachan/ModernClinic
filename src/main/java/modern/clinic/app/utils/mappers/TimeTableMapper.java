package modern.clinic.app.utils.mappers;

import modern.clinic.app.persistence.datatransferobjects.timetable.GetAvailableTimeTableDto;
import modern.clinic.app.persistence.entities.TimeTable;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.stream.Collectors;

public class TimeTableMapper {
    public static GetAvailableTimeTableDto mapToTimeTableDto(TimeTable timeTable) {
        return GetAvailableTimeTableDto.builder()
                .id(timeTable.getId())
                .date(timeTable.getDate())
                .time(timeTable.getStartTime() + " - " + timeTable.getEndTime())
                .build();
    }

    public static List<GetAvailableTimeTableDto> mapToTimeTableDtos(List<TimeTable> timeTables) {
        LocalDate today = LocalDate.now();
        LocalTime currentTime = LocalTime.now();

        return timeTables.stream()
                .filter(tt -> tt.getDate().isAfter(today) || (tt.getDate().isEqual(today) && tt.getStartTime().isAfter(currentTime)))
                .map(TimeTableMapper::mapToTimeTableDto)
                .collect(Collectors.toList());
    }
}
