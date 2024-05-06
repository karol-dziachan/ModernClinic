package modern.clinic.app.persistence.repository;

import modern.clinic.app.persistence.entities.OfferCategory;
import modern.clinic.app.persistence.entities.TimeTable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TimeTableRepository  extends JpaRepository<TimeTable, Long> {

}