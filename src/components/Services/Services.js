import React from 'react';
import useDataForServices from '../../hook/useDataForServices';
import ServicesCart from '../ServicesCart/ServicesCart';
import './Services.css';
const Services = () => {
    const [datas] = useDataForServices();
    console.log(datas);
    return (
        <div>
            <h1 className="mt-2 text-center text-decoration-underline">Our Course</h1>
            <div class="row row-cols-1 row-cols-md-4 g-4 mt-5">
                {datas.map(data => <ServicesCart data={data}></ServicesCart>)}
            </div>
        </div>
    );
};

export default Services;