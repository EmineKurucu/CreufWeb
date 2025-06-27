import React from "react";


const ProductsPage = () => {
  return (
    <div style={{ background: '#f3f4f6', minHeight: '100vh' }}>
      {/* Başlık var altına ürünler gelecek*/}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '64px' }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: 'rgba(16, 78, 39)',
          marginBottom: '0.5rem',
        }}>
          Products
        </h1>
        <div style={{
          width: '120px',
          height: '4px',
          background: 'linear-gradient(90deg,rgb(24, 39, 30), #10b981)',
          borderRadius: '2px',
          marginBottom: '2rem',
        }} />
      </div>
      {/* Ürünler burada listelenecek */}
    </div>
  );
};

export default ProductsPage;
