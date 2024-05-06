package modern.clinic.app.controller;

import lombok.RequiredArgsConstructor;
import modern.clinic.app.persistence.entities.Visit;
import modern.clinic.app.persistence.service.VisitService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/visits")
public class VisitController {
    private final VisitService visitsService;

    @GetMapping("/{id}")
    public ResponseEntity<Visit> getVisit(@PathVariable Long id) {
        Visit visits = visitsService.getById(id);
        if (visits != null) {
            return new ResponseEntity<>(visits, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Visit> addVisit(@RequestBody Visit visits) {
        visitsService.createVisit(visits);
        return new ResponseEntity<>(visits, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Visit>> getAllVisits() {
        List<Visit> visitss = visitsService.getAll();
        if (visitss != null) {
            return new ResponseEntity<>(visitss, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Visit> updateVisit(@PathVariable Long id, @RequestBody Visit visits) {
        Visit existingVisit = visitsService.getById(id);
        if (existingVisit != null) {
            visitsService.updateVisit(id, visits);
            return new ResponseEntity<>(visits, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Visit> deleteVisit(@PathVariable Long id) {
        Visit existingVisit = visitsService.getById(id);
        if (existingVisit != null) {
            visitsService.deleteVisit(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
