'use client'

import ProductGrid from '@/components/categories';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Products from '@/components/products';
import PromoSection from '@/components/PromoSection';
import React from 'react';

export default function JuiceShop() {
  return (
    <div className="min-h-screen bg-yellow-50">
     <Navbar/>
     <ProductGrid/>
     <Products/>
     <PromoSection/> 
     <Footer/>    
      </div>
  );
}