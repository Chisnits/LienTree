-- === CREATE TABLE ==================

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  user_first_name VARCHAR(255),
  user_last_name VARCHAR(255),
  nickname VARCHAR(255),
  email VARCHAR(255),
  photo VARCHAR(255)
);

-- === INSERT STATEMENT ===============

-- INSERT INTO users (user_first_name, user_last_name, email, photo) VALUES
-- ('', '', '', '')