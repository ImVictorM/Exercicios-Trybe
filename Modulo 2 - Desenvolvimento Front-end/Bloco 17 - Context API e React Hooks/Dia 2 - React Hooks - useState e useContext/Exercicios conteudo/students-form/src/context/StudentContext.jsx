import React, { createContext, useState } from 'react';

export const StudentContext = createContext();


function StudentProvider ({ children }) {
  const [ students, setStudent ] = useState([]);

  const addStudent = (student) => {
    setStudent((prevState) => [...prevState, student]);
  };

  const contextValue = {
    students,
    addStudent,
  };

  return (
    <StudentContext.Provider value={ contextValue }>
      {children}
    </StudentContext.Provider>
  );
}

export default StudentProvider;
