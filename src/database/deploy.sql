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


CREATE TABLE IF NOT EXISTS offer_categories(
    id BIGSERIAL PRIMARY KEY,
    category_name VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS offers(
    id BIGSERIAL PRIMARY KEY,
    offer_name VARCHAR(50) NOT NULL,
    offer_categories_id BIGINT NOT NULL,
    promo VARCHAR(50),
    price NUMERIC(10, 2) NOT NULL,
    is_nfz BOOLEAN NOT NULL,
    is_private_offer BOOLEAN NOT NULL,
    FOREIGN KEY (offer_categories_id) REFERENCES offer_categories(id)
    )

CREATE TABLE IF NOT EXISTS time_table(
    id BIGSERIAL PRIMARY KEY,
    date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL
    )

CREATE TABLE IF NOT EXISTS visits(
    id BIGSERIAL PRIMARY KEY,
    is_home BOOLEAN NOT NULL,
    place VARCHAR(200) NOT NULL,
    is_nfz BOOLEAN NOT NULL,
    refferal_number VARCHAR(50),
    doctor_id BIGINT NOT NULL,
    time_table_id BIGINT NOT NULL,
    service_id BIGINT NOT NULL,
    FOREIGN KEY (doctor_id) REFERENCES doctors(id),
    FOREIGN KEY (time_table_id) REFERENCES time_table(id),
    FOREIGN KEY (service_id) REFERENCES services(id)
    )