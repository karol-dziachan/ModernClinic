CREATE SCHEMA IF NOT EXISTS ModernClinic;

CREATE TABLE IF NOT EXISTS services (
                                        id BIGSERIAL PRIMARY KEY,
                                        service_name VARCHAR(50) NOT NULL
    );

CREATE TABLE IF NOT EXISTS specialities (
                                            id BIGSERIAL PRIMARY KEY,
                                            speciality_name VARCHAR(50) NOT NULL
    );


CREATE TABLE IF NOT EXISTS doctors (
                                       id BIGSERIAL PRIMARY KEY,
                                       doctor_first_name VARCHAR(50) NOT NULL,
    doctor_last_name VARCHAR(50) NOT NULL,
    speciality_id BIGINT NOT NULL,
    FOREIGN KEY (speciality_id) REFERENCES specialities(id)
    );

CREATE TABLE IF NOT EXISTS doctors_services (
                                                doctor_id BIGINT NOT NULL,
                                                service_id BIGINT NOT NULL,
                                                PRIMARY KEY (doctor_id, service_id),
    FOREIGN KEY (doctor_id) REFERENCES doctors(id),
    FOREIGN KEY (service_id) REFERENCES services(id)
    );


CREATE TABLE IF NOT EXISTS marks (
                                     id BIGSERIAL PRIMARY KEY,
                                     title VARCHAR(50) NOT NULL,
    description VARCHAR(500) NOT NULL,
    comment VARCHAR(500) NOT NULL,
    doctor_id BIGINT NOT NULL,
    FOREIGN KEY (doctor_id) REFERENCES doctors(id)
    );
