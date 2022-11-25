USE hr;

# ex - 1
SELECT * FROM hr.employees;
SELECT 
	emp.first_name AS 'Nome colaborador',
    mng.first_name AS 'Nome gerente'
FROM 
	hr.employees AS emp
INNER JOIN 
	hr.employees AS mng
	ON emp.manager_id = mng.manager_id
WHERE emp.department_id <> mng.department_id;

# ex - 2
SELECT
	mng.first_name AS 'Gerente',
    COUNT(mng.employee_id)
FROM hr.employees AS emp
INNER JOIN hr.employees AS mng
	ON emp.manager_id = mng.employee_id
GROUP BY mng.employee_id;
