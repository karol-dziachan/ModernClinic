package modern.clinic.app.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import modern.clinic.app.persistence.entities.Doctor;
import modern.clinic.app.persistence.entities.Speciality;
import modern.clinic.app.persistence.service.SpecialityService;

import java.util.List;

@RestController
@RequestMapping("/api/specialities")
@RequiredArgsConstructor
public class SpecialityController {

    private  final SpecialityService specialityService;

    @GetMapping("/{id}")
    public ResponseEntity<Speciality> getSpeciality(@PathVariable Long id) {
        var speciality = specialityService.getById(id);

        if (speciality != null) {
            return new ResponseEntity<>(speciality, HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Speciality> createSpeciality(@RequestBody Speciality speciality) {
        specialityService.create(speciality);
        return new ResponseEntity<>(speciality, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Speciality>> getAllSpecialities() {
        List<Speciality> specialities = specialityService.getAll();
        if (specialities != null) {
            return new ResponseEntity<>(specialities, HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Speciality> updateSpeciality(@PathVariable Long id, @RequestBody Speciality speciality) {
        Speciality existingSpeciality = specialityService.getById(id);
        if (existingSpeciality != null) {
            specialityService.updateSpeciality(id, speciality);
            return new ResponseEntity<>(existingSpeciality, HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Speciality> deleteSpeciality(@PathVariable Long id) {
        Speciality existingSpeciality = specialityService.getById(id);
        if (existingSpeciality != null) {
            specialityService.deleteSpeciality(id);
            return new ResponseEntity<>(existingSpeciality, HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/doctors-by-speciality-id/{id}")
    public ResponseEntity<List<Doctor>> getDoctorsBySpecialityId(@PathVariable Long id) {
        var doctors = specialityService.findDoctorsBySpecialityId(id);
        if (doctors != null) {
            return new ResponseEntity<>(doctors, HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/speciality-by-doctor-id/{id}")
    public ResponseEntity<Speciality> getSpecialityByDoctorId(Long id) {
        var speciality = specialityService.findByDoctorId(id);
        if (speciality != null) {
            return new ResponseEntity<>(speciality, HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
