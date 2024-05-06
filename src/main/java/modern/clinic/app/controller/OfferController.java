package modern.clinic.app.controller;

import lombok.RequiredArgsConstructor;
import modern.clinic.app.persistence.datatransferobjects.offer.PostOfferDto;
import modern.clinic.app.persistence.entities.Offer;
import modern.clinic.app.persistence.service.OfferService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/offers")
public class OfferController {
    private final OfferService offerService;

    @GetMapping("/{id}")
    public ResponseEntity<Offer> getOffer(@PathVariable Long id) {
        Offer offer = offerService.getById(id);
        if (offer != null) {
            return new ResponseEntity<>(offer, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<PostOfferDto> addOffer(@RequestBody PostOfferDto offer) {
        offerService.createOffer(offer);
        return new ResponseEntity<>(offer, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Offer>> getAllOffers() {
        List<Offer> offers = offerService.getAll();
        if (offers != null) {
            return new ResponseEntity<>(offers, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Offer> updateOffer(@PathVariable Long id, @RequestBody Offer offer) {
        Offer existingOffer = offerService.getById(id);
        if (existingOffer != null) {
            offerService.updateOffer(id, offer);
            return new ResponseEntity<>(offer, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Offer> deleteOffer(@PathVariable Long id) {
        Offer existingOffer = offerService.getById(id);
        if (existingOffer != null) {
            offerService.deleteOffer(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/offers-by-category-id/{id}")
    public ResponseEntity<List<Offer>> getOffersByCategoryId(@PathVariable Long id) {
        List<Offer> offers = offerService.getOffersByCategoryId(id);
        if (offers != null) {
            return new ResponseEntity<>(offers, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
