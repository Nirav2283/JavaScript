import React, { useState } from 'react';

function List() {
  const studentList = ['Arjun', 'Bala', 'Darshan', 'Rajkot'];

  // State to store the list of students, initially empty
  const [list, setList] = useState([]);

  // Handling the button click to display the list
  const handleClick = () => {
    setList(studentList); // Setting the studentList array to list state
  };

  return (
    <div>
      <h1>Click on a button to show student list</h1>
      <button onClick={handleClick}>Show Students</button>

      {/* Rendering the list */}
      <div>
        {list.map((stu) => (
          <h1>{stu}</h1>
        ))}
      </div>
    </div>
  );
}

export default List;
