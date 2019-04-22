-- Drops guitars table
DROP TABLE IF EXISTS reservations;

-- Creates reservations table
CREATE TABLE IF NOT EXISTS reservations (
    id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY
);