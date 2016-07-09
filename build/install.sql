set search_path=test1;
drop schema if exists test1 CASCADE;

create schema test1;
set search_path = test1;

CREATE TABLE authors
(
  author_id serial NOT NULL,
  name character varying(200) NOT NULL,
  CONSTRAINT author_pk PRIMARY KEY (author_id)
)
WITH (
  OIDS=FALSE
);

CREATE TABLE books
(
  book_id serial NOT NULL,
  title character varying(200) NOT NULL,
  author_id integer,
  CONSTRAINT book_pk PRIMARY KEY (book_id),
  CONSTRAINT books_fk1 FOREIGN KEY (author_id)
      REFERENCES authors (author_id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
)
WITH (
  OIDS=FALSE
);
