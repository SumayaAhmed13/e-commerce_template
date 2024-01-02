import React from 'react'
import Layout from '../components/Layout';
import ProductList from '../components/ProductList';
import SliderList from '../components/SliderList';
 const HomePage = () => {
  return (
    <Layout>
     <SliderList/>
     <ProductList/>
    </Layout>
    
  )
}
export default HomePage