import { useEffect, useState } from "react";

const useDataForServices = () => {
    const [data, setdata] = useState([]);
    useEffect(() => {
        fetch('/fakedata.json')
            .then(res => res.json())
            .then(data => setdata(data[1]))
    },
        []);
    console.log(data);
    return [data];
};
export default useDataForServices;