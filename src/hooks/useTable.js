import { useState, useEffect } from "react";

/*
 Page 번호 나누는 작업 rowsPerPage는 한 페이지당 몇개의 row를 가지게 할 것인지에 따라 분류하는 작업
*/
const calculateRange = (data, rowsPerPage) => {
    const range = [];
    const num = Math.ceil(data.length / rowsPerPage);
   
    for (let i = 1; i <= num; i++) {
      range.push(i);
    }
    return range;
  };
  
  /*
   Data List를 Page 번호에 따라 잘라서 반환하는 역할
  */
  const sliceData = (data, page, rowsPerPage) => {
    return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
  };

  /*
   Hook 은 함수형 컴포넌트가 클래스형 컴포넌트의 기능을 사용할 수 있도록 해주는 기능이다. 
   특징적으로는 state와 lifecycle과 같은 기능을 사용 가능하게 해준다.

  */
  const useTable = (data, page, rowsPerPage) => {
    const [tableRange, setTableRange] = useState([]);
    const [slice, setSlice] = useState([]);
  /* useEffect에 대해서 더 공부 필요*/ 
    useEffect(() => {
      const range = calculateRange(data, rowsPerPage);
      setTableRange([...range]);
  
      const slice = sliceData(data, page, rowsPerPage);
      setSlice([...slice]);
    }, [data, setTableRange, page, setSlice]);
  
    return { slice, range: tableRange };
  };
  
  export default useTable;