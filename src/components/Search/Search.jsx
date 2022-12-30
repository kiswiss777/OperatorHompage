import React from "react";
import styles from "./Search.module.css";

const Search = () => {
    return (
        <div className={styles.locationStyle}>
           <select name="StateSelectBox">
                  <option value="first">휴대폰</option>
                  <option value="second" selected>이름</option>
                </select>
            <textarea id="note" name="customnote" rows="1" cols="15">
            </textarea>
            <button className={styles.SearchButton}>
                  검색
            </button>
        </div>
    )
}

export default Search;