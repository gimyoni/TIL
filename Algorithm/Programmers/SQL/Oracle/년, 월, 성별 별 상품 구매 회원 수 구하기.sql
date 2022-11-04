SELECT TO_CHAR(SALES_DATE, 'YYYY') YEAR
        , TO_CHAR(SALES_DATE, 'MM') MONTH
        , GENDER
        , COUNT(DISTINCT O.USER_ID) USERS
FROM ONLINE_SALE O
JOIN USER_INFO U ON O.USER_ID = U.USER_ID
WHERE GENDER IS NOT NULL
GROUP BY TO_CHAR(SALES_DATE, 'YYYY'), TO_CHAR(SALES_DATE, 'MM'), GENDER
ORDER BY TO_CHAR(SALES_DATE, 'YYYY'), TO_CHAR(SALES_DATE, 'MM'), GENDER
