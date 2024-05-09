TRUNCATE TABLE services;
TRUNCATE TABLE specialities; 
TRUNCATE TABLE doctors;
TRUNCATE TABLE doctors_services;
TRUNCATE TABLE marks;
TRUNCATE TABLE offer_categories;
TRUNCATE TABLE time_table;
TRUNCATE TABLE doctors_timetables;
TRUNCATE TABLE visits;

-- INSERT INTO services (service_name) VALUES
--     ('Service 1'),

INSERT INTO services (service_name) VALUES
    ('Zastrzyk'),
    ('Pobieranie krwi'),
    ('Wykonanie EKG'),
    ('Wykonanie Echo serca'),
    ('Wykonanie badania cytologia'),
    ('Wykonanie badania prostaty'),
    ('Wykonanie badania BMI'),
    ('Podłączenie kroplówki');

INSERT INTO specialities (speciality_name) VALUES 
    ('Pielęgniarz/rka'),
    ('Kardiolog'),
    ('Neurolog'),
    ('Stomatolog'),
    ('Ortopeda'),
    ('Chirurg'),
    ('Chirurg plastyczny'),
    ('Psychiatra'),
    ('Okulista'),
    ('Urolog'),
    ('Dermatolog');

INSERT INTO doctor (doctor_first_name, doctor_last_name, degree, degree_short, speciality_id) VALUES 
    ('Anna', 'Lewandowska', 'Doktor', 'dr', 1),
    ('Joanna', 'Smuga', 'Doktor', 'dr', 1),
    ('Anna', 'Talent', 'Doktor', 'dr', 2),
    ('Marzena', 'Antczak', 'Doktor', 'dr', 2),
    ('Małgorzata', 'Marach', 'Doktor', 'dr', 3),
    ('Patrycja', 'Kwiatkowska', 'Doktor', 'dr', 3),
    ('Marzena', 'Antczak', 'Doktor', 'dr', 4),
    ('Marzena', 'Antczak', 'Doktor', 'dr', 4),
    ('Marzena', 'Antczak', 'Doktor', 'dr', 5),
    ('Marzena', 'Antczak', 'Doktor', 'dr', 5),
    ('Marzena', 'Antczak', 'Doktor', 'dr', 6),
    ('Marzena', 'Antczak', 'Doktor', 'dr', 6),
    ('Marzena', 'Antczak', 'Doktor', 'dr', 7),
    ('Marzena', 'Antczak', 'Doktor', 'dr', 7),
    ('Marzena', 'Antczak', 'Doktor', 'dr', 8),
    ('Marzena', 'Antczak', 'Doktor', 'dr', 8),
    ('Marzena', 'Antczak', 'Doktor', 'dr', 9),
    ('Marzena', 'Antczak', 'Doktor', 'dr', 9),
    ('Marzena', 'Antczak', 'Doktor', 'dr', 10),
    ('Marzena', 'Antczak', 'Doktor', 'dr', 10),
    ('Marzena', 'Antczak', 'Doktor', 'dr', 11),
    ('Marzena', 'Antczak', 'Doktor', 'dr', 11),
    ('Marzena', 'Antczak', 'Doktor', 'dr', 11)