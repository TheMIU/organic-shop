import React, { Component } from 'react'
import Product from '../../common/Product/product'
import axios from 'axios';

interface productState {
  data: any;
}

export default class Home extends Component<{}, productState> {

  private api: any;

  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.api = axios.create({baseURL:`http://localhost:4000`})
    this.state = {
      data: [],
    }
  }

  /* react life cycle method ekak */
  componentDidMount() {
    this.fetchData()
      .then(r => console.log("fetch data done" + r)); // callback function
  }

  fetchData = async () => {
    try {
      // const response = await fetch('./product-data.json'); // pause execution
      // const jsonData = await response.json(); // pause execution 
      
      this.api.get('/products/all')
        .then((res: { data: any }) => {
        const jsonData = res.data;
        this.setState({ data: jsonData })
      }).catch((error:any) => {
        console.error("axios error : ", error);
      });

    } catch (error) {
      console.log("Error : " + error);
    }
  }

  render() {
    const { data } = this.state;

    return (
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-center  bg-[#0e7575] p-5'>
        {
          data.map((product: any) => (
            <Product key={product.id} data={product} />
          ))
        }

      </div>
    )
  }
}
