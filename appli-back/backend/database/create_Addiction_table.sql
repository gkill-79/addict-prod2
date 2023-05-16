CREATE TABLE Addiction (
    id INT AUTO_INCREMENT,
    type VARCHAR(255) NOT NULL,
    description TEXT,
    severity INT,
    patient_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (patient_id) REFERENCES Patient(id)
) ENGINE=InnoDB;
