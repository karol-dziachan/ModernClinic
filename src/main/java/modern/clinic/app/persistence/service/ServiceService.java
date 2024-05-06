package modern.clinic.app.persistence.service;


import lombok.RequiredArgsConstructor;
import modern.clinic.app.persistence.repository.ServiceRepository;
import modern.clinic.app.persistence.entities.Service;

import java.util.List;

@org.springframework.stereotype.Service
@RequiredArgsConstructor
public class ServiceService {

    private final ServiceRepository repository;

    public Service createService(Service service) {
        return repository.save(service);
    }

    public List<Service> getAll() {
        return repository.findAll();
    }

    public Service getById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public void updateService(Long id, Service service) {
        service.setId(id);
        repository.save(service);
    }

    public void deleteService(Long id) {
        repository.deleteById(id);
    }
}
