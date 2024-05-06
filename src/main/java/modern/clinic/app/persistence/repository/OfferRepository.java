package modern.clinic.app.persistence.repository;

import modern.clinic.app.persistence.entities.Offer;
import modern.clinic.app.persistence.entities.OfferCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface OfferRepository  extends JpaRepository<Offer, Long> {
    @Query("SELECT o FROM Offer o WHERE o.offerCategory.id = :categoryId")
    List<Offer> findOffersByCategoryId(Long categoryId);

}