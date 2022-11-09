import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext'

function StudentsList() {
  const { students } = useContext(StudentContext);
  return (
    <ul>
      {
        students.map((student, index) => {
          const {name, age, city, module} = student;
          return (
            <div key={ index }>
              <p>{name}</p>
              <p>{age}</p>
              <p>{city}</p>
              <p>{module}</p>
            </div>
          )
        })
      }
    </ul>
  )
}

export default StudentsList;
