package modern.clinic.app.persistence.service;

import lombok.RequiredArgsConstructor;
import modern.clinic.app.persistence.datatransferobjects.offercategories.PostOfferCategoryDto;
import modern.clinic.app.persistence.entities.OfferCategory;
import modern.clinic.app.persistence.repository.OfferCategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class OfferCategoryService {

    private final OfferCategoryRepository repository;

    public OfferCategory createOfferCategory(PostOfferCategoryDto offerCategory) {
        var tempOfferCategory = OfferCategory.builder().name(offerCategory.getName()).build();
        return repository.save(tempOfferCategory);
    }

    public List<modern.clinic.app.persistence.entities.OfferCategory> getAll() {
        return repository.findAll();
    }

    public modern.clinic.app.persistence.entities.OfferCategory getById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public void updateOfferCategory(Long id, modern.clinic.app.persistence.entities.OfferCategory offerCategory) {
        offerCategory.setId(id);
        repository.save(offerCategory);
    }

    public void deleteOfferCategory(Long id) {
        repository.deleteById(id);
    }
}
