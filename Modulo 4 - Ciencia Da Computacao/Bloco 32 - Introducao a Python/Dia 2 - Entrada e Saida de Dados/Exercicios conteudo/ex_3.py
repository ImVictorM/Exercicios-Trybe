disapproved_students = []

with open("estudantes.txt", "r") as students_file:
    MIN_GRADE_TO_APPROVE = 6
    for student in students_file:
        name, grade = tuple(student.split(' '))
        if int(grade) < MIN_GRADE_TO_APPROVE:
            disapproved_students.append(f"{name}\n")

with open('estudantes_reprovados.txt', 'w') as disapproved_file:
    disapproved_file.writelines(disapproved_students)
