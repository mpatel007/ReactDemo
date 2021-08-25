import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

export default function ApiCrud() {
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    // const [text, setText] = useState({
    //     fname: '',
    //     uname: '',
    //     email: '',
    //     number: '',
    //     password: '',
    //     cpassword: '',
    //     gender: '',
    //     error: [],
    //     dataArray : [],
    // });

    // const changevalue = (e) => {
    //     let value = e.target.value;
    //     setText({
    //         ...text,
    //         [e.target.name]: value,
    //     });
    // }

    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     const data = [];
    //     data.push({fname:text.fname,
    //                     uname:text.uname,
    //                     email:text.email,
    //                     number:text.number,
    //                     password:text.password,
    //                     cpassword:text.cpassword,
    //                     gender:text.gender});
    //     setText({
    //         ...text,
    //         dataArray: data,
            
    //     });
    //      setShow(false);
    // }

    // const deleteStateData = (e) => {
    //     e.preventDefault();
    //     const data = {};
    //     setText({
    //         dataArray: data,
    //     })
    // }

    // return (
    //     <div className=" my-2">
    //         <Button variant="success" onClick={handleShow}>
    //         Register
    //         </Button>
    //         <Modal show={show} onHide={handleClose}>
    //             <Modal.Header closeButton>
    //                 <Modal.Title className="title">Register</Modal.Title>
    //             </Modal.Header>
    //             <Modal.Body>
    //                 <div className="content">
    //                     <form action="/">
    //                         <div className="user-details">
    //                             <div className="input-box">
    //                                 <span className="details">Full Name</span>
    //                                 <input type="text" placeholder="Enter your name" name="fname" defaultValue={text.fname} id="fname" onChange={(e) => changevalue(e)} required />
    //                             </div>
    //                             <div className="input-box">
    //                                 <span className="details">Username</span>
    //                                 <input type="text" placeholder="Enter your username" name="uname" defaultValue={text.uname} id="uname" onChange={(e) => changevalue(e)} required />
    //                             </div>
    //                             <div className="input-box">
    //                                 <span className="details">Email</span>
    //                                 <input type="text" placeholder="Enter your email" name="email" defaultValue={text.email} id="email" onChange={(e) => changevalue(e)} required />
    //                             </div>
    //                             <div className="input-box">
    //                                 <span className="details">Phone Number</span>
    //                                 <input type="text" placeholder="Enter your number" name="number" defaultValue={text.number} id="number" onChange={(e) => changevalue(e)} required />
    //                             </div>
    //                         </div>
                    
    //                         <div className="button">
    //                             <input type="submit" value="Register" onClick={onSubmit} />
    //                         </div>
    //                     </form>
    //                 </div>
    //             </Modal.Body>
    //         </Modal>
    
    //             <table className="table table-striped table-sm table-bordered my-5">
    //                 <thead className="thead-dark">
    //                     <tr>
    //                         <th scope="col">#</th>
    //                         <th scope="col">Full Name</th>
    //                         <th scope="col">Username</th>
    //                         <th scope="col">Email</th>
    //                         <th scope="col">Phone Number</th>
    //                         <th scope="col">Password</th>
    //                         <th scope="col">Confirm Password</th>
    //                         <th scope="col">Gender</th>
    //                         <th scope="col">Action</th>

    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                     <tr>

    //                         <td scope="col">1</td>
    //                         <td scope="col"> { (text.dataArray != '') ?  text.dataArray[0].fname : ''  }  </td>
    //                         <td scope="col"> { (text.dataArray != '') ?  text.dataArray[0].uname : ''  }  </td>
    //                         <td scope="col"> { (text.dataArray != '') ?  text.dataArray[0].email : ''  }  </td>
    //                         <td scope="col"> { (text.dataArray != '') ?  text.dataArray[0].number : ''  }  </td>
    //                         <td scope="col"> { (text.dataArray != '') ?  text.dataArray[0].password : ''  }  </td>
    //                         <td scope="col"> { (text.dataArray != '') ?  text.dataArray[0].cpassword : ''  }  </td>
    //                         <td scope="col"> { (text.dataArray != '') ?  text.dataArray[0].gender : ''  }  </td>
    //                         <td> <button className="btn btn-danger" onClick={deleteStateData}> Delete </button></td>
    //                     </tr>
    //                 </tbody>
    //             </table>
    //      </div>
    //             );
}
