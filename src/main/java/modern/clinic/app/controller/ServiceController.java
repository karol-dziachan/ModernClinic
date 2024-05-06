package modern.clinic.app.controller;


import lombok.RequiredArgsConstructor;
import modern.clinic.app.persistence.datatransferobjects.service.PostServiceDto;
import modern.clinic.app.persistence.entities.Service;
import modern.clinic.app.persistence.service.ServiceService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/services")
public class ServiceController {

    private final ServiceService serviceService;

    @GetMapping("/{id}")
    public ResponseEntity<Service> getService(@PathVariable Long id) {
        Service service = serviceService.getById(id);
        if (service != null) {
            return new ResponseEntity<>(service, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<PostServiceDto> addService(@RequestBody PostServiceDto service) {
        serviceService.createService(service);
        return new ResponseEntity<>(service, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Service>> getAllServices() {
        List<Service> services = serviceService.getAll();
        if (services != null) {
            return new ResponseEntity<>(services, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Service> updateService(@PathVariable Long id, @RequestBody Service service) {
        Service existingService = serviceService.getById(id);
        if (existingService != null) {
            serviceService.updateService(id, service);
            return new ResponseEntity<>(service, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Service> deleteService(@PathVariable Long id) {
        Service existingService = serviceService.getById(id);
        if (existingService != null) {
            serviceService.deleteService(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
