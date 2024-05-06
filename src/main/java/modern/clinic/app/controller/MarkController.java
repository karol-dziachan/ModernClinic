package modern.clinic.app.controller;

import lombok.RequiredArgsConstructor;
import modern.clinic.app.persistence.datatransferobjects.mark.PostMarkDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import modern.clinic.app.persistence.entities.Mark;
import modern.clinic.app.persistence.service.MarkService;


import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/marks")
public class MarkController {

    private final MarkService markService;

    @GetMapping("/{id}")
    public ResponseEntity<Mark> getMark(@PathVariable Long id) {
        Mark mark = markService.getById(id);
        if (mark != null) {
            return new ResponseEntity<>(mark, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<PostMarkDto> addMark(@RequestBody PostMarkDto mark) {
         markService.createMark(mark);
        return new ResponseEntity<>(mark, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Mark>> getAllMarks() {
        List<Mark> marks = markService.getAll();
        if (marks != null) {
            return new ResponseEntity<>(marks, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Mark> updateMark(@PathVariable Long id, @RequestBody Mark mark) {
        Mark existingMark = markService.getById(id);
        if (existingMark != null) {
            markService.updateMark(id, mark);
            return new ResponseEntity<>(mark, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Mark> deleteMark(@PathVariable Long id) {
        Mark existingMark = markService.getById(id);
        if (existingMark != null) {
            markService.deleteMark(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/get-by-doctor/{id}")
    public ResponseEntity<List<Mark>> getMarkByDoctor(@PathVariable Long id) {
        var mark = markService.getMarksByDoctorId(id);
        if (mark != null) {
            return new ResponseEntity<>(mark, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
