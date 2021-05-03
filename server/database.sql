
create TABLE testtbl(
  id SERIAL PRIMARY KEY,
  mydate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  myname VARCHAR(30),
  myamount INTEGER,
  mydistance INTEGER
);