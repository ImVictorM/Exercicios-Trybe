from employee import Employee
from hashmap import HashMap

employees = [
    Employee(employee[0], employee[1])
    for employee in [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]
]

hm = HashMap()
for employee in employees:
    hm.insert(employee)

print(hm.get_value(23))

hm.update_value(23, "victor")

print(hm.get_value(23))
