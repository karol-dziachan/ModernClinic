package modern.clinic.app.persistence.repository;

import modern.clinic.app.persistence.entities.OfferCategory;
import modern.clinic.app.persistence.entities.Visit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VisitRepository   extends JpaRepository<Visit, Long> {

}
