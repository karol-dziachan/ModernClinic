package modern.clinic.app.controller;

import lombok.RequiredArgsConstructor;
import modern.clinic.app.persistence.entities.OfferCategory;
import modern.clinic.app.persistence.service.OfferCategoryService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/offer-categories")
public class OfferCategoryController {

    private final OfferCategoryService offerCategoryService;

    @GetMapping("/{id}")
    public ResponseEntity<OfferCategory> getOfferCategory(@PathVariable Long id) {
        OfferCategory offerCategory = offerCategoryService.getById(id);
        if (offerCategory != null) {
            return new ResponseEntity<>(offerCategory, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<OfferCategory> addOfferCategory(@RequestBody OfferCategory offerCategory) {
        offerCategoryService.createOfferCategory(offerCategory);
        return new ResponseEntity<>(offerCategory, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<OfferCategory>> getAllOfferCategorys() {
        List<OfferCategory> offerCategorys = offerCategoryService.getAll();
        if (offerCategorys != null) {
            return new ResponseEntity<>(offerCategorys, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<OfferCategory> updateOfferCategory(@PathVariable Long id, @RequestBody OfferCategory offerCategory) {
        OfferCategory existingOfferCategory = offerCategoryService.getById(id);
        if (existingOfferCategory != null) {
            offerCategoryService.updateOfferCategory(id, offerCategory);
            return new ResponseEntity<>(offerCategory, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<OfferCategory> deleteOfferCategory(@PathVariable Long id) {
        OfferCategory existingOfferCategory = offerCategoryService.getById(id);
        if (existingOfferCategory != null) {
            offerCategoryService.deleteOfferCategory(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
