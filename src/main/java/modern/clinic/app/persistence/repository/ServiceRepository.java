package modern.clinic.app.persistence.repository;

import modern.clinic.app.persistence.entities.Mark;
import modern.clinic.app.persistence.entities.Service;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ServiceRepository extends JpaRepository<Service, Long> {

}