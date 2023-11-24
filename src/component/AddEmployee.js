import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddEmployee(props) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [img, setImg] = useState('');

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     <button className="block mx-auto bg-purple-500 hover:bg-white-700 text-white font-bold py-2 px-4 rounded" onClick={handleShow}>+ Add Employee</button>  

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={(e) =>{
          e.preventDefault();
          setName('');
          setRole('')
          handleClose();
          props.newEmployee(props.id, name, role, img);
        }}
         id="edit" className="w-full max-w-sm">
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlfor="name">
        Full Name
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="name" type="text" value={name} placeholder="Full Name"
      onChange={(e) => {
        setName(e.target.value)
      }}
      />
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlfor="role">
        Role
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="role" type="text" value={role} placeholder="Role"
      onChange={(e) => {
        setRole(e.target.value)
      }}
      />
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlfor="Image">
        Image
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="Image" type="url" value={img} placeholder="https//Image-Url.com"
      onChange={(e) => {
        setImg(e.target.value) 
      }}
      />
    </div>
  </div>
</form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button form='edit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEmployee;
    