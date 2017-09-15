-- === CREATE TABLE ==================

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255),
  password VARCHAR(255)
);

-- === INSERT STATEMENT ===============

INSERT INTO users (email) VALUES
('chasederr@gmail.com'),
('maddiederr@gmail.com'),
('violetderr@gmail.com');