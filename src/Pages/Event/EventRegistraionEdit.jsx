import { useState } from "react";
import EventRegistraionDataView from "./EventRegistraionDataView";
import JUBOFLogo from '../../assets/logo/jubof_logo.png';
import EventLogo from '../../assets/logo/jubof_logo.png';
import "./Event.css";
import { useNavigate } from "react-router-dom";

const EventRegistraionEdit = () => {
    const [enablePayment, setEnablePayment] = useState(false);

    const navigate = useNavigate();
    const handleRegDataEdit = () => {
        navigate("/viewRegiData");
    }

    return (
        <div className=" col-xl-6 col-md-8 mx-auto my-5">


            <div className=" eventRegArea">

                <div className=" container d-flex justify-content-center align-items-center fw-bold mb-0">
                    <div className=" col-1">
                        <img src={JUBOFLogo} className="enentRegViewImg" alt="JUBOFLogo" />
                    </div>
                    <div className="col-10">
                        <h3 className="fw-bold text-body-emphasis  text-center mb-0">A Seafaring Adventure: Sailing into the Unknown</h3>
                        <h5 className="text-center mt-0">
                            <label className=" fw-bold">Event Venue </label>
                            <span className=" text-primary ">: Ship Journey on padma river</span>,

                            <label className="fw-bold ms-1 ">Event Date</label>
                            <span className=" text-primary fw-bold">: 27 January 2024</span>
                        </h5>
                    </div>
                    <div className="col-1">
                        <img src={EventLogo} className="enentRegViewImg" alt="JUBOFLogo" />
                    </div>
                </div>



                <h2 className='fw-bold text-center mt-4'>Edit Registration Data</h2>

                <div className=' d-md-flex my-2 gap-1'>
                    <div className="col-md-4">
                        <label className=" fw-bold ms-1">Name</label>

                        <input
                            defaultValue={"Nizam Uddin"}
                            className='form-control my-2 '
                            type='text'
                            name='eventDate'
                            id='eventDate'
                            disabled
                            required
                        />
                    </div>

                    <div className="col-md-4">
                        <label className=" fw-bold ms-1">Designation</label>
                        <div>
                            <input
                                defaultValue={"DIG of Police"}
                                className='form-control my-2 '
                                type='text'
                                name='eventPlace'
                                id='eventPlace'
                                disabled
                                required
                            />
                        </div>

                    </div>
                    <div className="col-md-4">
                        <label className=" fw-bold ms-1">Current Posting</label>
                        <div>
                            <input
                                defaultValue={"Dhaka"}
                                className='form-control my-2 '
                                type='text'
                                name='eventPlace'
                                id='eventPlace'
                                disabled
                                required
                            />
                        </div>

                    </div>


                </div>

                <div className=' d-md-flex my-2 gap-1'>
                    <div className="col-md-6">
                        <label className=" fw-bold ms-1">JU Batch</label>

                        <input
                            defaultValue={"Nizam Uddin"}
                            className='form-control my-2 '
                            type='text'
                            name='name'
                            id='name'
                            disabled
                            required
                        />
                    </div>

                    <div className="col-md-6">
                        <label className=" fw-bold ms-1">JU Department</label>
                        <div>
                            <input
                                defaultValue={"Police"}
                                className='form-control my-2 '
                                type='text'
                                name='name'
                                id='name'
                                disabled
                                required
                            />
                        </div>
                    </div>
                </div>

                <div className=' d-md-flex my-2 gap-1'>
                    <div className="col-md-6">
                        <label className=" fw-bold ms-1">BCS Batch</label>

                        <input
                            defaultValue={"Nizam Uddin"}
                            className='form-control my-2 '
                            type='text'
                            name='name'
                            id='name'
                            disabled
                            required
                        />
                    </div>

                    <div className="col-md-6">
                        <label className=" fw-bold ms-1">BCS Cadre</label>
                        <div>
                            <input
                                defaultValue={"Police"}
                                className='form-control my-2 '
                                type='text'
                                name='name'
                                id='name'
                                disabled
                                required
                            />
                        </div>
                    </div>
                </div>

                <div className=' d-md-flex my-2 gap-1'>
                    <div className="col-md-6">
                        <label className=" fw-bold ms-1">Phone</label>

                        <input
                            defaultValue={"01256789456"}
                            className='form-control my-2 '
                            type='text'
                            name='name'
                            id='name'
                            disabled
                            required
                        />
                    </div>

                    <div className="col-md-6">
                        <label className=" fw-bold ms-1">Email</label>
                        <div>
                            <input
                                defaultValue={"nizamuddingpolice@gmail.com"}
                                className='form-control my-2 '
                                type='text'
                                name='name'
                                id='name'
                                disabled
                                required
                            />
                        </div>
                    </div>
                </div>

                <div className="">
                    <label className=" fw-bold ms-1">Wish</label>
                    <div className="form-floating">
                        <textarea className="form-control" name="wish" placeholder="Leave a comment here" maxLength={200} id="wish"></textarea>
                        <label htmlFor="wish">Wish</label>
                    </div>
                </div>
                <div className=" text-center mt-3">
                    <button onClick={handleRegDataEdit} className="btn btn-outline-secondary px-5 fw-bold fs-5" type="submit">Save</button>
                </div>
            </div>


        </div >
    );
};

export default EventRegistraionEdit;