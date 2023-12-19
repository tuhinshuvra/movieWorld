import JUBOFLogo from '../../assets/logo/jubof_logo.png'
import EventLogo from '../../assets/logo/jubof_logo.png'
import Attendee from '../../assets/member/member-02.jpg'
import "../Event/Event.css";

const EventPaymentCompleteDataView = () => {



    return (
        <div className="container my-5  ">
            <div className=" regCompletion col-xl-8 mx-auto ">
                <div className="row">

                    <div className=" d-flex justify-content-center align-items-center fw-bold mb-0">
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


                    <h4 className=" text-center fw-bold">Registration Completion Data</h4>
                    <div className=" col-12 d-md-flex fw-bold mt-4">
                        <div className=" col-md-6">

                            <div className="  d-flex my-1 ">
                                <label className="col-4">Registraion No</label>
                                <span className="col-8 text-primary fw-bold">
                                    : 100001
                                </span>
                            </div>

                            <div className="  d-flex my-1 ">
                                <label className="col-4">Name </label>
                                <span className="col-8 text-primary ">
                                    : Nizam Uddin
                                </span>
                            </div>

                            <div className="  d-flex my-1 ">
                                <label className="col-4">Designation</label>
                                <span className="col-8 text-primary ">
                                    : DIG of Police
                                </span>
                            </div>

                            <div className="  d-flex my-1 ">
                                <label className="col-4">Current Posting</label>
                                <span className="col-8 text-primary fw-bold">
                                    : Dhaka
                                </span>
                            </div>

                            <div className="  d-flex my-1 ">
                                <label className="col-4">BCS Batch </label>
                                <span className="col-8 text-primary ">
                                    : 25th
                                </span>
                            </div>

                            <div className="  d-flex my-1 ">
                                <label className="col-4">BCS Cadre</label>
                                <span className="col-8 text-primary fw-bold">
                                    : Police
                                </span>
                            </div>
                        </div>

                        <div className=" col-md-6">
                            <img src={Attendee} className="regMemberImg d-flex mx-auto" alt="" />
                        </div>
                    </div>


                    <div className="d-flex my-1 fw-bold ">
                        <label className="col-2">JU Information </label>
                        <span className="col-10 text-primary ">
                            : Economics, 36th batch
                        </span>
                    </div>

                    <div className=" d-md-flex col-12 fw-bold">
                        <div className="col-md-6 d-flex my-1 ">
                            <label className="col-4">Phone No</label>
                            <span className="col-8 text-primary ">
                                : 01456788990
                            </span>
                        </div>

                        <div className="col-md-6 d-flex my-1 ">
                            <label className="col-4">Email</label>
                            <span className="col-8 text-primary">
                                : jubofmember@gmail.com
                            </span>
                        </div>
                    </div>


                    <div className=" d-md-flex col-12 fw-bold">
                        <div className="col-md-6 d-flex my-1 ">
                            <label className="col-4">Paid Reg. Fee</label>
                            <span className="col-8 text-primary ">: 1000 /- </span>
                        </div>


                        <div className="col-md-6 d-flex my-1 ">
                            <label className="col-4">Payment Method</label>
                            <span className="col-8 text-primary fw-bold">: BiKash </span>
                        </div>


                    </div>
                    <div className=" d-md-flex col-12 fw-bold">
                        <div className="col-md-6 d-flex my-1 ">
                            <label className="col-4">Payment Date</label>
                            <span className="col-8 text-primary fw-bold">: 15/12/2023</span>
                        </div>

                        <div className="col-md-6 d-flex my-1 ">
                            <label className="col-4">Transaction ID</label>
                            <span className="col-8 text-primary fw-bold">: AZHTY563433GH</span>
                        </div>
                    </div>
                </div>
                <div className=' d-flex justify-content-center my-3'>
                    <button className=' btn btn-outline-secondary fs-5'>Share with Facebook</button>
                    <button className=' btn btn-outline-secondary ms-3 fs-5'>Print</button>
                </div>
            </div>

        </div >
    );
};

export default EventPaymentCompleteDataView;