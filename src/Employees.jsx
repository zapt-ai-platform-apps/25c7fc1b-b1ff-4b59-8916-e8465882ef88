import React, { useState } from 'react';

export default function Employees() {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe', position: 'Développeur' },
    { id: 2, name: 'Jane Smith', position: 'Chef de projet' },
  ]);

  const [newEmployee, setNewEmployee] = useState({ name: '', position: '' });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewEmployee((prev) => ({ ...prev, [name]: value }));
  }

  function handleAddEmployee(event) {
    event.preventDefault();
    if (!newEmployee.name || !newEmployee.position) return;
    const id = employees.length + 1;
    setEmployees([...employees, { id, ...newEmployee }]);
    setNewEmployee({ name: '', position: '' });
  }

  return (
    <div className="p-4 box-border">
      <h1 className="text-xl font-bold mb-4 text-gray-800">Gestion du personnel</h1>
      <ul>
        {employees.map((emp) => (
          <li key={emp.id} className="text-gray-800">
            {emp.name} - {emp.position}
          </li>
        ))}
      </ul>
      <form onSubmit={handleAddEmployee} className="mt-4">
        <input
          type="text"
          name="name"
          value={newEmployee.name}
          onChange={handleInputChange}
          className="border rounded mr-2 p-1 w-full box-border"
          placeholder="Nom"
        />
        <input
          type="text"
          name="position"
          value={newEmployee.position}
          onChange={handleInputChange}
          className="border rounded mr-2 p-1 w-full box-border"
          placeholder="Poste"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 cursor-pointer"
        >
          Ajouter
        </button>
      </form>
    </div>
  );
}