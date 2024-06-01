package modern.clinic.app.utils.mappers;

import modern.clinic.app.persistence.datatransferobjects.doctor.GetAvailableSpecialistDto;
import modern.clinic.app.persistence.datatransferobjects.doctor.GetSpecialistsDto;
import modern.clinic.app.persistence.datatransferobjects.doctor.MarkDto;
import modern.clinic.app.persistence.datatransferobjects.doctor.PersonDto;
import modern.clinic.app.persistence.entities.Doctor;
import modern.clinic.app.persistence.entities.Mark;
import modern.clinic.app.persistence.entities.Service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

public class DoctorMapper {
    public static GetAvailableSpecialistDto mapToGetAvailableSpecialistDto(Doctor doctor) {
        return GetAvailableSpecialistDto.builder()
                .id(doctor.getId())
                .name(doctor.getDegreeShort() + " " + doctor.getFirstName() + " " + doctor.getLastName())
                .photo(doctor.getPicture())
                .availableOffers(doctor.getServices().stream()
                        .map(service -> service.getId().intValue())
                        .collect(Collectors.toList()))
                .availableTime(doctor.getTimeTables().stream()
                        .map(timeTable -> timeTable.getId().intValue())
                        .collect(Collectors.toList()))
                .build();
    }

    public static PersonDto mapDoctorToPersonDto(Doctor doctor){
        String name = doctor.getDegreeShort() + " " + doctor.getFirstName() + " " + doctor.getLastName();
        Long rateAvg = calculateRateAvg(doctor.getMarks());

        return PersonDto.builder()
                .id(doctor.getId())
                .name(name)
                .speciality(doctor.getSpeciality().getName())
                .rateAvg(rateAvg)
                .photo(doctor.getPicture())
                .services(getServiceIds(doctor.getServices()))
                .opinions(mapToMarkDtos(doctor.getMarks()))
                .build();
    }

    private static Long calculateRateAvg(List<Mark> marks) {
        if (marks == null || marks.isEmpty()) {
            return 0L;
        }
        long sum = marks.stream()
                .mapToLong(Mark::getMark)
                .sum();
        return sum / marks.size();
    }

    private static List<Integer> getServiceIds(Set<Service> services) {
        return services.stream()
                .map(service -> Math.toIntExact(service.getId()))
                .collect(Collectors.toList());
    }

    private static List<MarkDto> mapToMarkDtos(List<Mark> marks) {
        if (marks == null) {
            return null;
        }
        return marks.stream()
                .map(mark -> MarkDto.builder()
                        .id(mark.getId())
                        .mark(mark.getMark())
                        .title(mark.getTitle())
                        .comment(mark.getComment())
                        .build())
                .collect(Collectors.toList());
    }


    public static GetSpecialistsDto mapToGetSpecialistsDto(List<Doctor> doctors) {
        List<PersonDto> personDtos = doctors.stream()
                .map(doctor -> {
                    new PersonDto();
                    return mapDoctorToPersonDto(doctor);
                })
                .collect(Collectors.toList());

        return GetSpecialistsDto.builder()
                .persons(personDtos)
                .build();
    }
}
