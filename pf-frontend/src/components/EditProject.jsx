import React from 'react'

function EditProject({project }) {
    const[show,setShow]=useState(false);
    const handleClose=()=>setShow(false);
    const handleShow=()=>setShow(true);
    
  return (
    <>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className="row">
            <div className="col-lg-6">
            <label>

<input type="file" style={{display:"none"}} onChange={e=>setProjectDetails({...projectDetails,projectImage:e.target.files[0]})} />
<img src={preview?preview:"https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png"} alt="" width={"200px"}  className='rounded circle'  />
</label>  
            </div>
            <div className="col-lg-6">
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder='Project Title' value={projectDetails.title}
                    onChange={e=>setProjectDetails({...projectDetails,title:e.target.value})}   />
                    </div>
                    <div className="mb-3">
                    <input type="text" className="form-control"  placeholder='Language Used' value={projectDetails.languages} 
                    onChange={e=>setProjectDetails({...projectDetails,languages:e.target.value})}/>
                    </div>
                    <div className="mb-3">
                    <input type="text" className="form-control" placeholder=' Github' value={projectDetails.github}
                    onChange={e=>setProjectDetails({...projectDetails,github:e.target.value})}/>
                    </div>
                    <div className="mb-3">
                    <input type="text" className="form-control"   placeholder='Website Link' value={projectDetails.website}
                    onChange={e=>setProjectDetails({...projectDetails,website:e.target.value})}/>
                    </div>
                    <div className="mb-3">
                    <input type="text" className="form-control"   placeholder='Project Overview' value={projectDetails.overview}
                    onChange={e=>setProjectDetails({...projectDetails,overview:e.target.value})}/>
                    
                </div>
            </div>
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
    <button onClick={handleShow} className='btn'><i class='fa-solid fa-pen-to-sqaure'></i></button>
    </>
  )
}

export default EditProject