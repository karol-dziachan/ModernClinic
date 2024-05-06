package modern.clinic.app.persistence.service;

import lombok.RequiredArgsConstructor;
import modern.clinic.app.persistence.datatransferobjects.offer.PostOfferDto;
import modern.clinic.app.persistence.entities.Offer;
import modern.clinic.app.persistence.repository.OfferCategoryRepository;
import modern.clinic.app.persistence.repository.OfferRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class OfferService {

    private final OfferRepository repository;
    private final OfferCategoryRepository offerCategoryRepository;

    public modern.clinic.app.persistence.entities.Offer createOffer(PostOfferDto offer) {
        var existsOfferCategory = offerCategoryRepository.findById(offer.getOfferCategoryId())
                .orElseThrow(() -> new RuntimeException("Nie znaleziono kategorii o podanym ID: " + offer.getOfferCategoryId()));
        var tempOffer = Offer.builder()
                .name(offer.getName())
                .promo(offer.getPromo())
                .price(offer.getPrice())
                .isNfz(offer.isNfz())
                .isPrivateOffer(offer.isPrivateOffer())
                .offerCategory(existsOfferCategory)
                .build();

        return repository.save(tempOffer);
    }

    public List<Offer> getAll() {
        return repository.findAll();
    }

    public modern.clinic.app.persistence.entities.Offer getById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public void updateOffer(Long id, modern.clinic.app.persistence.entities.Offer offer) {
        offer.setId(id);
        repository.save(offer);
    }

    public void deleteOffer(Long id) {
        repository.deleteById(id);
    }

    public List<Offer> getOffersByCategoryId(Long categoryId) {
        return repository.findOffersByCategoryId(categoryId);
    }
}
