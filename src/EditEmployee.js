import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditEmployee(props) {
  const [name, setName] = useState(props.name);
  const [role, setRole] = useState(props.role);
  const [img, setImg] = useState(props.img);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = () => {
    props.deleteEmployee(props.id, name, role, img);
    handleClose(); 
  };

  return (
    <>
     <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" onClick={handleShow}>Edit</button> 

     <button className="px-4 py-1 text-sm bg-gray-600 text-white font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-gray-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2" onClick={handleDelete}>Delete</button>  

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={(e) =>{
          e.preventDefault();
          handleClose();
          props.updateEmployee(props.id, name, role, img);
        }}
         id="edit" className="w-full max-w-sm">
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
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
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
        Role
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="role" type="text" value={role} placeholder="React Dev"
      onChange={(e) => {
        setRole(e.target.value)
      }}
      />
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
        Image
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="Image" type="text" value={img} placeholder="https//Image-url.com"       onChange={(e) => {
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
          <button form='edit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditEmployee;
    