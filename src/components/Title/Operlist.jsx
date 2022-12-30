import React from "react";
import styles from "./Operlist.module.css"
import { useNavigate } from 'react-router-dom';


const Operlist = () => {
    const navigate = useNavigate();

    const onClickApplicant =() => {
        navigate('/Adminpage')
    }

    const onClickReservation =() => {
        navigate('/ReservationPage')
    }

    const onClickInputApplicant =() => {
        navigate('/Adminpage')
    }

    return (
        <div className={styles.navbar}>
            <a onClick={onClickApplicant}>신청자</a>
            <a onClick={onClickReservation}>예약</a>
            <a onClick={onClickInputApplicant}>신청자입력</a>
        </div>
    )
}

export default Operlist;