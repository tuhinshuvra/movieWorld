
import { Link, useLocation, useNavigate } from 'react-router-dom';
import EventImg from '../../assets/event/ship_image.jpg';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import configUrl from '../../api/config';
import { getCookie } from '../../utlis/helper';
import { AllContext } from '../../hooks/ContextData';
import Loader from '../../Components/Loader/Loader';

const EventDetailsPage = () => {
    const { user } = useContext(AllContext);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const token = getCookie("token");

    useEffect(() => {
        setLoading(true);
        if (!token) {
            return;
        }

        try {
            axios.get(`${configUrl.BASEURL}/api/memberProfile/${user?.id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            })
                .then(result => {
                    if (result?.data?.data) {
                        // console.log("Member Profile collection Data :", result);

                        const memberData = {
                            juBatch: result?.data?.data?.juBatch,
                            department: result?.data?.data?.department,
                            bcsBatch: result?.data?.data?.bcsBatch,
                            bcsCadre: result?.data?.data?.bcsCadre,
                        }
                        localStorage.setItem("memberInfo", JSON.stringify(memberData));
                        setLoading(false)
                    }
                    else {
                        try {
                            axios.get(`${configUrl.BASEURL}/api/memberRequestProfile/${user?.id}`, {
                                headers: {
                                    'Authorization': `Bearer ${token}`,
                                }
                            })
                                .then(result => {
                                    const memberData = {
                                        juBatch: result?.data?.data?.JU_Batch,
                                        department: result?.data?.data?.JU_Dept,
                                        bcsBatch: result?.data?.data?.BCS_Batch,
                                        bcsCadre: result?.data?.data?.BCS_Dept,
                                    }
                                    localStorage.setItem("memberInfo", JSON.stringify(memberData));
                                    setLoading(false)
                                })
                        } catch (error) {
                            setErrorMessage(error.message);
                        }

                    }
                })

        } catch (error) {
            setErrorMessage(error.message);
        }

    }, []);



    // if (loading) {
    //     return (
    //         <Loader></Loader>
    //     )
    // }

    return (
        <div className="px-2 my-3  ">
            <div className="overflow-hidden text-center" style={{ maxHeight: "70vh" }}>
                <div className="px-1">
                    <img src={EventImg} className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="1000" height="1200" loading="lazy" />
                </div>
            </div>
            <h1 className="  fw-bold text-body-emphasis text-center my-4">A Seafaring Adventure: Sailing into the Unknown</h1>
            <div className="col-lg-8 mx-auto">
                <p className="lead mb-4">
                    The ship embarked on a seafaring odyssey, its prow slicing through the waves with a determined grace, venturing into the vast expanse of the unknown. The sun hung low, casting a warm, golden glow that painted the ocean's surface. Excitement buzzed through the air as passengers gathered on the deck, their faces reflecting a blend of anticipation and wonder. <br />
                </p>

                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <Link to="/eventRegistration" className="btn btn-outline-secondary btn-lg px-4">Restistraion</Link>
                </div>
            </div>
        </div >
    );
};

export default EventDetailsPage;