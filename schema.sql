-- SQL Schema for MS Dancepiration Academy

-- 1. Instructors Table
CREATE TABLE instructors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    title VARCHAR(100), -- e.g. "Founder", "Lead Choreographer"
    specialty TEXT,
    photo_url VARCHAR(255),
    bio TEXT,
    instagram_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_VALUE
);

-- 2. Dance Classes Table
CREATE TABLE classes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    image_url VARCHAR(255),
    difficulty_level VARCHAR(50), -- e.g. "Beginner", "Intermediate", "Advanced"
    created_at TIMESTAMP DEFAULT CURRENT_VALUE
);

-- 3. Class Schedule Table
CREATE TABLE schedules (
    id SERIAL PRIMARY KEY,
    class_id INT REFERENCES classes(id),
    instructor_id INT REFERENCES instructors(id),
    day_of_week VARCHAR(20), -- e.g. "Monday"
    start_time TIME,
    end_time TIME,
    room_number VARCHAR(20)
);

-- 4. Contact Inquiries Table (From Registration/Contact Form)
CREATE TABLE inquiries (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL,
    class_interest VARCHAR(100),
    message TEXT,
    status VARCHAR(20) DEFAULT 'unseen', -- e.g. "unseen", "responded"
    created_at TIMESTAMP DEFAULT CURRENT_VALUE
);

-- 5. Newsletter Subscription Table
CREATE TABLE newsletter_subscribers (
    id SERIAL PRIMARY KEY,
    email VARCHAR(150) UNIQUE NOT NULL,
    subscribed_at TIMESTAMP DEFAULT CURRENT_VALUE
);

-- Initial Data Seeds (Optional)
INSERT INTO instructors (name, title, specialty, photo_url) VALUES 
('Mahesh Gupta Sir', 'Founder & Head Instructor', 'Hip-Hop & Urban', '/images/instructor_1.jpg'),
('Shivlata Mam', 'Lead Choreographer', 'Contemporary & Classical', '/images/instructor_2.jpg');

INSERT INTO classes (name, description, image_url) VALUES 
('Hip-Hop', 'Urban energy and street style fusion.', '/images/hiphop.png'),
('Bollywood', 'The joy and drama of Indian cinema dance.', '/images/bollywood.png'),
('Contemporary', 'Fluidity, expression, and emotional depth.', '/images/contemporary.png');
