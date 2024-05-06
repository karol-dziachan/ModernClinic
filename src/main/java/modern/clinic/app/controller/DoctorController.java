package modern.clinic.app.controller;

import lombok.RequiredArgsConstructor;
import modern.clinic.app.persistence.datatransferobjects.doctor.*;
import modern.clinic.app.persistence.entities.Doctor;
import modern.clinic.app.persistence.entities.Mark;
import modern.clinic.app.persistence.entities.Service;
import modern.clinic.app.persistence.service.DoctorService;
import modern.clinic.app.persistence.service.ServiceService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/doctors")
public class DoctorController {

    private final DoctorService doctorService;
    private final ServiceService serviceService;

    @GetMapping("/{id}")
    public ResponseEntity<Doctor> getDoctor(@PathVariable Long id) {
        Doctor doctor = doctorService.getById(id);
        if (doctor != null) {
            return new ResponseEntity<>(doctor, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/get-specialists")
    public ResponseEntity<GetSpecialistsDto> getDoctor() {
        GetSpecialistsDto specialists = doctorService.getSpecialists();
        if (specialists != null) {
            return new ResponseEntity<>(specialists, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<PostDoctorDto> addDoctor(@RequestBody PostDoctorDto doctor) {
        doctorService.add(doctor);
        return new ResponseEntity<>(doctor, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Doctor>> getAllDoctors() {
        List<Doctor> doctors = doctorService.getAll();
        if (doctors != null) {
            return new ResponseEntity<>(doctors, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<PutDoctorDto> updateDoctor(@PathVariable Long id, @RequestBody PutDoctorDto doctor) {
        Doctor existingDoctor = doctorService.getById(id);
        if (existingDoctor != null) {
            doctorService.update(id, doctor);
            return new ResponseEntity<>(doctor, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Doctor> deleteDoctor(@PathVariable Long id) {
        Doctor existingDoctor = doctorService.getById(id);
        if (existingDoctor != null) {
            doctorService.delete(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/services-by-doctor/{id}")
    public ResponseEntity<List<Service>> GetServicesByDoctorId(@PathVariable Long id){
        Doctor existingDoctor = doctorService.getById(id);
        if (existingDoctor != null) {
            var services = doctorService.getServicesByDoctor(id);
            return new ResponseEntity<>(services, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/marks-by-doctor/{id}")
    public ResponseEntity<List<Mark>> GetMarksByDoctorId(@PathVariable Long id){
        Doctor existingDoctor = doctorService.getById(id);
        if (existingDoctor != null) {
            var marks = doctorService.getMarksByDoctor(id);
            return new ResponseEntity<>(marks, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/assign-service")
    public ResponseEntity AssignService(@RequestBody AssignServiceDto assignServiceDto){
        Doctor doctor = doctorService.getById(assignServiceDto.getDoctorId());
        Service service = serviceService.getById(assignServiceDto.getServiceId());

        if(doctor != null && service != null){
            doctorService.assignService(doctor.getId(), service.getId());
            return new ResponseEntity<>(null, HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/available-specialists")
    public ResponseEntity<List<GetAvailableSpecialistDto>> getAvailableSpecialists(){
        var specialists = doctorService.getAvailableSpecialists();
        if (specialists != null) {
            return new ResponseEntity<>(specialists, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
