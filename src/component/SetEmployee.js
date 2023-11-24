import Employee from '../component/Employee';
import AddEmployee from '../component/AddEmployee';
import {useState, useEffect} from 'react';

export default function SetEmployee(){
  const API_URL = 'http://localhost:3500/employee';
  const showEmployee = true;
  const [employee, setEmployee] = useState([]);
  const [ setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() =>{
         const fetchEmployees = async () => {
          try{
            const response = await fetch(API_URL);
            const listEmployee = await response.json();
            setEmployee(listEmployee);
          } catch (err){
            setFetchError(err.message)
          } finally{
            setIsLoading(false);
          }
         }
         setTimeout(() =>{
          (async () => await fetchEmployees())()
         }, 2000)
    }, [setFetchError]);

    async function updateEmployee(id, newName, newRole, newImg) {
      try {
        const response = await fetch(`${API_URL}/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: newName, role: newRole, img: newImg }),
        });
  
        if (!response.ok) {
          throw new Error('Failed to update employee');
        }
  
        const updatedEmployees = employee.map((emp) =>
          emp.id === id ? { ...emp, name: newName, role: newRole, img: newImg } : emp
        );
  
        setEmployee(updatedEmployees);
      } catch (error) {
        console.error('Error updating employee:', error);
        // Handle the error (e.g., show an error message to the user)
      }
    }
    
    async function deleteEmployee(idToDelete) {
      try {
        const response = await fetch(`${API_URL}/${idToDelete}`, {
          method: 'DELETE',
        });
  
        if (!response.ok) {
          throw new Error('Failed to delete employee');
        }
  
        const updatedEmployees = employee.filter((emp) => emp.id !== idToDelete);
        setEmployee(updatedEmployees);
      } catch (error) {
        console.error('Error deleting employee:', error);
      }
    }
  
       
    async function newEmployee(id, name, role, img){
      try {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, role, img }),
        });
  
        if (!response.ok) {
          throw new Error('Failed to add employee');
        }
  
        const newEmployee = await response.json();
        setEmployee([...employee, newEmployee]);
      } catch (error) {
        setFetchError(error.message);
      }
    }
    return (
      <div>
        {showEmployee ? (
          <>
            {isLoading && <p>Loading Employees....</p>}
            {!isLoading && (
              <>
                <div className="flex flex-wrap">
                  {employee.map((employee) => (
                    <Employee
                      key={employee.id}
                      id={employee.id}
                      name={employee.name}
                      role={employee.role}
                      img={employee.img}
                      updateEmployee={updateEmployee}
                      deleteEmployee={deleteEmployee}
                    />
                  ))}
                </div>
                <AddEmployee newEmployee={newEmployee} />
            </>
          )}
        </>
      ) : (
        <h1>No employees</h1>
      )}
    </div>
  );
}
