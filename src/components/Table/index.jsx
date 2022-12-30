import React, { useState } from "react";

import useTable from "../../hooks/useTable";
import styles from "./Table.module.css";
import TableFooter from "./TableFooter";

const Table = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  return (
    <>
      <table className={styles.table}>
        <thead className={styles.tableRowHeader}>
          <tr>
            <th className={styles.tableHeader}>번호</th>
            <th className={styles.tableHeader}>날짜</th>
            <th className={styles.tableHeader}>제목</th>
            <th className={styles.tableHeader}>이름</th>
            <th className={styles.tableHeader}>휴대폰 번호</th>
            <th className={styles.tableHeader}>상태</th>
            <th className={styles.tableHeader}>예약날짜</th>
            <th className={styles.tableHeader}>메모</th>
            <th className={styles.tableHeader}>전화걸기</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((el) => (
            <tr className={styles.tableRowItems} key={el.id}>
              <td className={styles.tableCell}>{el.index}</td>
              <td className={styles.tableCell}>{el.date}</td>
              <td className={styles.tableCell}>{el.title}</td>
              <td className={styles.tableCell}>{el.name}</td>
              <td className={styles.tableCell}>{el.Phone_Number}</td>
              <td>
                <select name="StateSelectBox">
                  <option value="first">방문</option>
                  <option value="second" selected>미방문</option>
                  <option value="thrid">None</option>
                </select>
              </td>
              <td>
                <div className={styles.tableDate}>
                  <input type="date" id="reservation" name="it_reservation" value="2022-11-26" min="2018-01-01" max="2100-12-31" />
                  <input type="time" id="reservationTime" name="it_reservationTime" value="12:30" min="09:00" max="18:00" required />
                </div>
              </td>
              <td>
                <textarea id="note" name="customnote" rows="4" cols="30">
                </textarea>
              </td>
              <td>
                <button className={styles.tableButton}>
                  전화걸기
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  );
};

export default Table;