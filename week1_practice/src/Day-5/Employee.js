import React from 'react';

const Employee = ({ name, shift }) => {
  return (
    <p>
      Employee Name: {name} <br />
      Employee Shift: {shift}
      <br />
      <br />
    </p>
  );
};

export default Employee;
