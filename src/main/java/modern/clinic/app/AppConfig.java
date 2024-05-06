package modern.clinic.app;

import jakarta.persistence.EntityManagerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import javax.sql.DataSource;

@Configuration
@EnableTransactionManagement
@ComponentScan(basePackages = {"modern.clinic.app.*"})
public class AppConfig  implements WebMvcConfigurer  {
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("swagger-ui.html")
                .addResourceLocations("classpath:/META-INF/resources/");

        registry.addResourceHandler("/webjars/**")
                .addResourceLocations("classpath:/META-INF/resources/webjars/");
    }

    @Value("${spring.datasource.url}")
    private String url;

    @Value("${spring.datasource.username}")
    private String username;

    @Value("${spring.datasource.password}")
    private String password;

    @Value("${spring.datasource.driver-class-name}")
    private String driverClassName;


    @Bean
    public DataSource dataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName(driverClassName);
        dataSource.setUrl(url);
        dataSource.setUsername(username);
        dataSource.setPassword(password);
        return dataSource;
    }

//    @Bean
//    public MarkService markService() {
//        return new MarkService();
//    }
// @Bean
//    public SpecialityService specialityService(){
//        return new SpecialityService();
//    }

    @Bean
    public EntityManagerFactory entityManagerFactory() {

        HibernateJpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
        vendorAdapter.setGenerateDdl(true);

        LocalContainerEntityManagerFactoryBean factory = new LocalContainerEntityManagerFactoryBean();
        factory.setJpaVendorAdapter(vendorAdapter);
        factory.setPackagesToScan("modern.clinic.app");
        factory.setDataSource(dataSource());
        factory.afterPropertiesSet();

        return factory.getObject();
    }

    @Bean
    public PlatformTransactionManager transactionManager() {

        JpaTransactionManager txManager = new JpaTransactionManager();
        txManager.setEntityManagerFactory(entityManagerFactory());
        return txManager;
    }

  /*  @Bean
    public SpecialityRepository specialityRepository(){
        return new SpecialityRepository() {
            @Override
            public List<Doctor> findDoctorsBySpecialityId(Long specialityId) {
                return List.of();
            }

            @Override
            public Speciality findByDoctorId(Long doctorId) {
                return null;
            }

            @Override
            public void flush() {

            }

            @Override
            public <S extends Speciality> S saveAndFlush(S entity) {
                return null;
            }

            @Override
            public <S extends Speciality> List<S> saveAllAndFlush(Iterable<S> entities) {
                return List.of();
            }

            @Override
            public void deleteAllInBatch(Iterable<Speciality> entities) {

            }

            @Override
            public void deleteAllByIdInBatch(Iterable<Long> longs) {

            }

            @Override
            public void deleteAllInBatch() {

            }

            @Override
            public Speciality getOne(Long aLong) {
                return null;
            }

            @Override
            public Speciality getById(Long aLong) {
                return null;
            }

            @Override
            public Speciality getReferenceById(Long aLong) {
                return null;
            }

            @Override
            public <S extends Speciality> List<S> findAll(Example<S> example) {
                return List.of();
            }

            @Override
            public <S extends Speciality> List<S> findAll(Example<S> example, Sort sort) {
                return List.of();
            }

            @Override
            public <S extends Speciality> List<S> saveAll(Iterable<S> entities) {
                return List.of();
            }

            @Override
            public List<Speciality> findAll() {
                return List.of();
            }

            @Override
            public List<Speciality> findAllById(Iterable<Long> longs) {
                return List.of();
            }

            @Override
            public <S extends Speciality> S save(S entity) {
                return null;
            }

            @Override
            public Optional<Speciality> findById(Long aLong) {
                return Optional.empty();
            }

            @Override
            public boolean existsById(Long aLong) {
                return false;
            }

            @Override
            public long count() {
                return 0;
            }

            @Override
            public void deleteById(Long aLong) {

            }

            @Override
            public void delete(Speciality entity) {

            }

            @Override
            public void deleteAllById(Iterable<? extends Long> longs) {

            }

            @Override
            public void deleteAll(Iterable<? extends Speciality> entities) {

            }

            @Override
            public void deleteAll() {

            }

            @Override
            public List<Speciality> findAll(Sort sort) {
                return List.of();
            }

            @Override
            public Page<Speciality> findAll(Pageable pageable) {
                return null;
            }

            @Override
            public <S extends Speciality> Optional<S> findOne(Example<S> example) {
                return Optional.empty();
            }

            @Override
            public <S extends Speciality> Page<S> findAll(Example<S> example, Pageable pageable) {
                return null;
            }

            @Override
            public <S extends Speciality> long count(Example<S> example) {
                return 0;
            }

            @Override
            public <S extends Speciality> boolean exists(Example<S> example) {
                return false;
            }

            @Override
            public <S extends Speciality, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
                return null;
            }
        };
    }

    @Bean
    public MarkRepository markRepository() {
        return new MarkRepository() {
            @Override
            public List<Mark> findByDoctorId(Long doctorId) {
                return List.of();
            }

            @Override
            public void flush() {

            }

            @Override
            public <S extends Mark> S saveAndFlush(S entity) {
                return null;
            }

            @Override
            public <S extends Mark> List<S> saveAllAndFlush(Iterable<S> entities) {
                return List.of();
            }

            @Override
            public void deleteAllInBatch(Iterable<Mark> entities) {

            }

            @Override
            public void deleteAllByIdInBatch(Iterable<Long> longs) {

            }

            @Override
            public void deleteAllInBatch() {

            }

            @Override
            public Mark getOne(Long aLong) {
                return null;
            }

            @Override
            public Mark getById(Long aLong) {
                return null;
            }

            @Override
            public Mark getReferenceById(Long aLong) {
                return null;
            }

            @Override
            public <S extends Mark> List<S> findAll(Example<S> example) {
                return List.of();
            }

            @Override
            public <S extends Mark> List<S> findAll(Example<S> example, Sort sort) {
                return List.of();
            }

            @Override
            public <S extends Mark> List<S> saveAll(Iterable<S> entities) {
                return List.of();
            }

            @Override
            public List<Mark> findAll() {
                return List.of();
            }

            @Override
            public List<Mark> findAllById(Iterable<Long> longs) {
                return List.of();
            }

            @Override
            public <S extends Mark> S save(S entity) {
                return null;
            }

            @Override
            public Optional<Mark> findById(Long aLong) {
                return Optional.empty();
            }

            @Override
            public boolean existsById(Long aLong) {
                return false;
            }

            @Override
            public long count() {
                return 0;
            }

            @Override
            public void deleteById(Long aLong) {

            }

            @Override
            public void delete(Mark entity) {

            }

            @Override
            public void deleteAllById(Iterable<? extends Long> longs) {

            }

            @Override
            public void deleteAll(Iterable<? extends Mark> entities) {

            }

            @Override
            public void deleteAll() {

            }

            @Override
            public List<Mark> findAll(Sort sort) {
                return List.of();
            }

            @Override
            public Page<Mark> findAll(Pageable pageable) {
                return null;
            }

            @Override
            public <S extends Mark> Optional<S> findOne(Example<S> example) {
                return Optional.empty();
            }

            @Override
            public <S extends Mark> Page<S> findAll(Example<S> example, Pageable pageable) {
                return null;
            }

            @Override
            public <S extends Mark> long count(Example<S> example) {
                return 0;
            }

            @Override
            public <S extends Mark> boolean exists(Example<S> example) {
                return false;
            }

            @Override
            public <S extends Mark, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
                return null;
            }
        };
    }*/
}

