import { useEffect, useState } from 'react';
import configUrl from '../../api/config';
import axios from 'axios';

const BatchAndDepartmentListPublic = () => {
    const [districtList, setDistrictList] = useState([]);
    const [bcsCaderList, setBCSCaderList] = useState([]);
    const [juDepartmentList, setJUDepartmentList] = useState([]);
    const [juBatchWiseSessionList, setJUBatchWiseSessionList] = useState([]);
    const [juHallLists, setJUHallList] = useState([]);
    const [bcsBatchList, setBCSBatchList] = useState([]);

    useEffect(() => {

        // district list of bangladesh
        axios.get('https://my-portfolio-website-server-teal.vercel.app/districts')
            .then(res => {
                const sortedDistricts = res.data.sort((a, b) => a.name.localeCompare(b.name));
                setDistrictList(sortedDistricts)
            })

        // ju hall list
        fetch(`${configUrl.BASEURL}/api/v1/allHalls`)
            .then(response => response.json())
            .then(data => {
                setJUHallList(data?.data);
            });

        // ju allDepartments list
        fetch(`${configUrl.BASEURL}/api/v1/allDepartments`)
            .then(response => response.json())
            .then(data => {
                setJUDepartmentList(data?.data);
            });

        // ju batchWiseSession list
        fetch(`${configUrl.BASEURL}/api/v1/juBatchList`)
            .then(response => response.json())
            .then(data => {
                setJUBatchWiseSessionList(data?.data);
            });

        // ju BCS Batch list
        fetch(`${configUrl.BASEURL}/api/v1/bcsBatchList`)
            .then(response => response.json())
            .then(data => {
                setBCSBatchList(data?.data);
            });

        // ju BCS Cadre list
        fetch(`${configUrl.BASEURL}/api/v1/bcsCadreList`)
            .then(response => response.json())
            .then(data => {
                setBCSCaderList(data?.data);
            });
    }, []);

    return {
        districtList,
        bcsCaderList,
        juDepartmentList,
        juHallLists,
        juBatchWiseSessionList,
        bcsBatchList,
    };
};

export default BatchAndDepartmentListPublic;
