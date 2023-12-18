import React, { Component } from 'react'
import carrot from '../../../images/products/carrot.png'
import cabbage from '../../../images/products/cabage.png'

interface productProps {
    data: any;
}

export default class product extends Component<productProps> {
    render() {
        const {data}=this.props;
        const image = require('../../../images/products/' + data.image)

        return (
            <div className='flex flex-col justify-center items-center p-6 bg-white rounded-lg shadow-lg h-[40vh]'>
                <div className='flex flex-row items-center '>
                    <div className="m-4">
                        <img src={image} alt="carrot" />
                    </div>
                    <div className='text-left'>
                        <h3 className='text-2xl font-bold text-[#0e7575] mb-2'>{data.name}</h3>
                        <h3 className='text-2xl font-bold'>{ data.currency} {data.price} </h3>
                        <p className='text-sm mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit
                            . Obcaecati, pariatur voluptatibus
                        </p>
                        <button className="bg-[#0e7575] text-white px-4 py-2 rounded-md hover:bg-[#095c5c] transition duration-300">Add to Cart</button>
                    </div>
                </div>
            </div>
        )
    }
}
