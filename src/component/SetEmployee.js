import Employee from '../component/Employee';
import {useState} from 'react';

export default function SetEmployee(){
  const showEmployee = true;
  const [employee, setEmployee] = useState(
    [
      {
        id: 1,
        name: "John",
        role: "Frontend Dev",
        img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg" 
      },
      {
        id: 2,
        name: "James",
        role: "Backend Dev",
        img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg" 
      },
      {
        id: 3,
        name: "Jordan",
        role: "Java Dev",
        img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg" 
      },
      {
        id: 4,
        name: "Johnpaul",
        role: "UI/UX",
        img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg" 
      },
      {
        id: 5,
        name: "Jackson",
        role: "Manager",
        img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg" 
      },
    ]
    );
    function updateEmployee(id, newName, newRole, newImg){
      const updatedEmployees = employee.map((employee) => {
        if(employee.id === id){
          return{...employee, name: newName, role:newRole, img:newImg};
        }
        return employee;
      });
      setEmployee(updatedEmployees)
    }
  return(
    <div className="flex flex-wrap">
      {showEmployee ? (
    <>
    {employee.map((employee) => {
      return(
        <Employee 
        key={employee.id}
        id={employee.id}
        name={employee.name}
        role={employee.role}
        img={employee.img}
        updateEmployee={updateEmployee}
        />
      )
    })}
    </>
    ):(
      <h1>No employee</h1>
    )
    }
    </div>
  )
}