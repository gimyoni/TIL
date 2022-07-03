SELECT DISTINCT a.ID, a.NAME, a.HOST_ID
  FROM PLACES a, PLACES b
 WHERE 1=1
   AND a.ID != b.ID
   AND a.HOST_ID = b.HOST_ID
ORDER BY ID ASC;
