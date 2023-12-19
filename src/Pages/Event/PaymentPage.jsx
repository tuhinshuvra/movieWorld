import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";

const PaymentPage = () => {
    const [loading, setLoading] = useState(false);
    const [enableSubmit, setEnableSubmit] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);


    const navigate = useNavigate();


    const setHandleEventPayment = () => {
        // console.log("This is handle event payment");
        localStorage.setItem("paymentStatus", 2);
        navigate("/viewPaymentData");
    }

    const confirmPayment = localStorage.getItem("confirmPayment");
    // console.log("confirmPayment data ", confirmPayment);

    if (confirmPayment) {
        navigate("/viewPaymentData");
    }


    if (loading) {
        return (
            <Loader></Loader>
        )
    }

    return (
        <div className="  mx-auto my-3">
            <h2 className='fw-bold text-center'>Payment of Event</h2>
            <div className=' d-md-flex my-2 gap-1'>
                <div className="col-md-6">
                    <label className=" fw-bold ms-1">Event Date</label>

                    <input
                        defaultValue={"27/01/2024"}
                        className='form-control my-2 '
                        type='text'
                        name='eventDate'
                        id='eventDate'
                        disabled
                        required
                    />
                </div>

                <div className="col-md-6">
                    <label className=" fw-bold ms-1">Place</label>
                    <div>
                        <input
                            defaultValue={"Padma River"}
                            className='form-control my-2 '
                            type='text'
                            name='eventPlace'
                            id='eventPlace'
                            disabled
                            required
                        />
                    </div>

                </div>


            </div >
            <div className=' d-md-flex my-2 gap-1'>
                <div className="col-md-6">
                    <label className=" fw-bold ms-1">Amount(৳) </label>

                    <input
                        defaultValue={1000}
                        className='form-control my-2 '
                        type='number'
                        name='paymentAmount'
                        id='paymentAmount'
                        disabled
                        required
                    />
                </div>
                <div className="col-md-6">
                    <label className=" fw-bold ms-1">Payment With</label>

                    <select
                        // defaultValue={profileDefaultData?.bloodGroup}
                        className="form-select"
                        name="paymentMedia"
                        id="paymentMedia"
                        required
                    >
                        <option value="">Please Select</option>
                        <option value="BiKash">BiKash</option>
                        <option value="Nagad">Nagad</option>
                        <option value="Bank Transfer">Bank Transfer</option>
                        <option value="VISA Card">VISA Card</option>
                        <option value="AM Ex">AM Ex</option>
                    </select>
                </div>
            </div >
            <div className=" text-center">
                <button onClick={setHandleEventPayment} className="btn btn-outline-secondary w-50 fw-bold fs-5" type="submit">Cofirm Payment</button>
            </div>


        </div >
    );
};

export default PaymentPage;