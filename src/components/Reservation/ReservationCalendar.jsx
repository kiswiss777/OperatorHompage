import React, { useState } from 'react';
import { format, addMonths, subMonths } from 'date-fns';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from 'date-fns';
import { isSameMonth, isSameDay, addDays, parse } from 'date-fns';
import styles from "./ReservationCalendar.module.css"


const CalendarHeader = ({currentMonth, prevMonth, nextMonth}) => {
    return(
        <div className={styles.topCalendar}>
            <div className={styles.topLeft}>
                <button type='button' onClick={prevMonth}>prevMonth</button>
                <button type='button' onClick={nextMonth}>nextMonth</button>
            </div>
            <div className={styles.topMiddle}>
                <div>
                    {format(currentMonth,'M')}월
                </div>
                <div>
                    {format(currentMonth,'yyyy')}년
                </div>
            </div>
            <div className={styles.topRight}>

            </div>

        </div>
    )
}

const BodyCell = ({currentMonth, selectedDate, onDateClick}) => {
    const array = [];
    const dayArray = ['Sun','Mon','The','Wed','Thu','Fri','Sat']
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(currentMonth);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfMonth(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = '';

    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
            if (0 === i) {
                array.push(<div className={styles.fontStyle}>{dayArray[j]}</div>);
            }
            else {
                formattedDate = format(day,'d');
                const cloneDay = day;
                array.push(<div className=
                    { !isSameMonth(day,monthStart)
                      ? styles.disabled 
                      : isSameDay(day, selectedDate)
                      ? styles.selected
                      : format(currentMonth,'M') !== format(day,'M')
                      ? styles.notValid
                      : styles.valid}
                      key = {day}
                      onClick={() => onDateClick(parse(cloneDay))}>
                        {formattedDate}
                </div>)
            }
            if( 0 !== i)
            {
                day = addDays(day,1);
            }
        }
    }

    return array;
}

const ReservationCalendar = () => {
  
    const [currentMonth, setCurrentMonth] = useState(new Date());
  
    const [selectedDate, setSelectedDate] = useState(new Date());

    const prevMonth = () =>
    {
        setCurrentMonth(subMonths(currentMonth,1));
    }
    const nextMonth =() => 
    {
        setCurrentMonth(addMonths(currentMonth,1));
    }
    const onDateClick = (day) => {
        setSelectedDate(day);
    }

    return (
        <div className={styles.containerWrapper}>
            <CalendarHeader 
                currentMonth={currentMonth}
                prevMonth={prevMonth}
                nextMonth={nextMonth}>
            </CalendarHeader>
            <div className={styles.container}>
            <BodyCell 
                currentMonth={currentMonth}
                selectedDate={selectedDate}
                onDateClick={onDateClick}>
            </BodyCell>
            </div>
        </div>
    )
}

export default ReservationCalendar;