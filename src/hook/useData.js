import { useEffect } from "react";
import { useState } from "react"

const useData = () => {
    const [data, setdata] = useState([]);
    useEffect(() => {
        fetch('/fakedata.json')
            .then(res => res.json())
            .then(data => setdata(data[0]))
    },
        []);
    return [data];

};

export default useData;