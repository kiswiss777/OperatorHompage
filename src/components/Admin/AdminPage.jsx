import React, { useState } from "react";

import countriesData from "../../data/countries";
import styles from "./AdminPage.module.css";
import Table from "../Table";
import Title from "../Title/Title"
import SubTitle from "../Title/SubTitle"
import Search from "../Search/Search"
import Operlist from "../Title/Operlist"

const adminpage = () => {
    const [countries] = useState([...countriesData]);
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
                    <Search>
                    </Search>
                    <Table data={countries} rowsPerPage={10} />
                </div>
            </div>
        </main>
    )
};

export default adminpage;