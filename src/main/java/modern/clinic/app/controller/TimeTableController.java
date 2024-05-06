package modern.clinic.app.controller;

import lombok.RequiredArgsConstructor;
import modern.clinic.app.persistence.entities.TimeTable;
import modern.clinic.app.persistence.service.TimeTableService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/time-table")
public class TimeTableController {
    private final TimeTableService timeTableService;

    @GetMapping("/{id}")
    public ResponseEntity<TimeTable> getTimeTable(@PathVariable Long id) {
        TimeTable timeTable = timeTableService.getById(id);
        if (timeTable != null) {
            return new ResponseEntity<>(timeTable, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<TimeTable> addTimeTable(@RequestBody TimeTable timeTable) {
        timeTableService.createTimeTable(timeTable);
        return new ResponseEntity<>(timeTable, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<TimeTable>> getAllTimeTables() {
        List<TimeTable> timeTables = timeTableService.getAll();
        if (timeTables != null) {
            return new ResponseEntity<>(timeTables, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<TimeTable> updateTimeTable(@PathVariable Long id, @RequestBody TimeTable timeTable) {
        TimeTable existingTimeTable = timeTableService.getById(id);
        if (existingTimeTable != null) {
            timeTableService.updateTimeTable(id, timeTable);
            return new ResponseEntity<>(timeTable, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<TimeTable> deleteTimeTable(@PathVariable Long id) {
        TimeTable existingTimeTable = timeTableService.getById(id);
        if (existingTimeTable != null) {
            timeTableService.deleteTimeTable(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
