package modern.clinic.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@EnableJpaRepositories("modern.clinic.app.*")
@EntityScan("modern.clinic.app.*")
public class ModernClinicApplication {

	public static void main(String[] args) {
		SpringApplication.run(ModernClinicApplication.class, args);
	}

}

//TODO: upcommingVisitData