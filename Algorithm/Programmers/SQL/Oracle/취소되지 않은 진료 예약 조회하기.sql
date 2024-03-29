SELECT A.APNT_NO, B.PT_NAME, B.PT_NO, A.MCDP_CD, C.DR_NAME, A.APNT_YMD
FROM APPOINTMENT A
INNER JOIN PATIENT B ON A.PT_NO = B.PT_NO
INNER JOIN DOCTOR C ON A.MDDR_ID = C.DR_ID
WHERE TO_CHAR(A.APNT_YMD, 'YYYYMMDD') = '20220413'
AND A.APNT_CNCL_YN = 'N'
AND A.APNT_CNCL_YMD IS NULL
ORDER BY A.APNT_YMD, B.PT_NO;
