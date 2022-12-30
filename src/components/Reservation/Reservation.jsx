import React, { useState } from "react";

import styles from "./Reservation.module.css"
import Title from "../Title/Title"
import SubTitle from "../Title/SubTitle"
import Operlist from "../Title/Operlist"
import ReservationCalendar from "./ReservationCalendar";

const ReservationPage = () => {
    return (
        <main className={styles.container}>
            <Title>
            </Title>
            <div className={styles.ParentWrapper}>
                <Operlist>
                </Operlist>
                <div className={styles.wrapper}>
                    <SubTitle>
                    </SubTitle>
                    <ReservationCalendar>
                    </ReservationCalendar>
                </div>
            </div>
        </main>
    )
};

export default ReservationPage;