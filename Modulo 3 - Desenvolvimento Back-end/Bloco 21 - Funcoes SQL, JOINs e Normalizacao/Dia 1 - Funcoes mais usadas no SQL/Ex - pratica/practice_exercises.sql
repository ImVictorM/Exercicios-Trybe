USE hr;

# ex - 1
SELECT MAX(salary) FROM hr.employees;

# ex - 2
SELECT (MAX(salary) - MIN(salary))
FROM hr.employees;

# ex - 3
SELECT job_id, AVG(salary) AS avg_salary
FROM hr.employees
GROUP BY job_id
ORDER BY avg_salary DESC;

# ex - 4
SELECT SUM(salary) FROM hr.employees;

# ex - 5
SELECT
	ROUND(MAX(salary), 2),
    ROUND(MIN(salary), 2),
    ROUND(SUM(salary), 2),
    ROUND(AVG(salary), 2)
FROM hr.employees;

# ex - 6
SELECT COUNT(*) FROM hr.employees
WHERE job_id LIKE 'it_prog';

# ex - 7
SELECT job_id, SUM(salary)
FROM hr.employees
GROUP BY job_id;

# ex - 8
SELECT job_id, SUM(salary)
FROM hr.employees
WHERE job_id LIKE 'it_prog';

# ex - 9
SELECT job_id, AVG(salary) AS avg_salary
FROM hr.employees
GROUP BY job_id
HAVING NOT job_id = 'it_prog' 
ORDER BY avg_salary DESC;

# ex - 10
SELECT 
	department_id, 
    AVG(salary) AS avg_salary, 
    COUNT(*) AS employees
FROM hr.employees
GROUP BY department_id
HAVING employees > 10;

# ex - 11
SET SQL_SAFE_UPDATES = 0;
UPDATE hr.employees
SET phone_number = REPLACE(phone_number, 515, 777)
WHERE phone_number LIKE '515%';

# ex - 12
SELECT *
FROM hr.employees
WHERE CHAR_LENGTH(first_name) >= 8;

# ex - 13
SELECT employee_id, first_name, YEAR(hire_date)
FROM hr.employees;

# ex - 14
SELECT employee_id, first_name, DAY(hire_date)
FROM hr.employees;

# ex - 15
SELECT employee_id, first_name, MONTH(hire_date)
FROM hr.employees;

# ex - 16
SELECT UCASE(first_name)
FROM hr.employees;

# ex - 17
SELECT last_name, hire_date
FROM hr.employees
WHERE MONTH(hire_date) = 7 AND YEAR(hire_date) = 1987;

# ex - 18
SELECT 
	first_name, 
	last_name, 
	DATEDIFF(CURRENT_DATE(), hire_date) AS days_working
FROM hr.employees;

