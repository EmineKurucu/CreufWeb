import React from "react";
import { MapPin, Users, Truck, Shield, Zap, Eye } from "lucide-react";
import depo from "/depo.jpg";
import fabrika from "/public/fabrika.jpg";
import fabrika2 from "/fabrika8.jpg";
import uretim from "/uretim.jpg";
import power from "/power.jpg";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "UWB Asset Tracker",
      image: depo,
      description: "High-precision UWB tracker for real-time asset monitoring. Features long battery life, IP67 rating, and centimeter-level accuracy for industrial environments.",
      color: "#3b82f6",
      icon: <MapPin size={20} />
    },
    {
      id: 2,
      name: "Personnel Safety Tracker",
      image: fabrika,
      description: "Wearable UWB tracker designed for employee safety monitoring. Includes emergency button, haptic feedback, and real-time location tracking capabilities.",
      color: "#10b981",
      icon: <Users size={20} />
    },
    {
      id: 3,
      name: "Forklift Vehicle Tracker",
      image: fabrika2,
      description: "Robust vehicle tracking solution for forklifts and industrial vehicles. Monitor driver behavior, optimize routes, and enhance warehouse safety operations.",
      color: "#f59e0b",
      icon: <Truck size={20} />
    },
    {
      id: 4,
      name: "ATEX Ex-Proof Tracker",
      image: uretim,
      description: "Zone 1 & 21 certified explosion-proof tracker for hazardous environments. Flame retardant IP67 enclosure with contactless charging capability.",
      color: "#dc2626",
      icon: <Shield size={20} />
    },
    {
      id: 5,
      name: "UWB Anchor System",
      image: power,
      description: "Fixed positioning anchors that form the infrastructure backbone. Easy installation, mesh networking, and precise distance measurement capabilities.",
      color: "#8b5cf6",
      icon: <Zap size={20} />
    }
  ];

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.headerSection}>
        <div style={styles.headerContent}>
          <div style={styles.logoContainer}>
            <h1 style={styles.mainTitle}>UWBix Products</h1>
          </div>
          <p style={styles.headerSubtitle}>
            Precision UWB Tracking Solutions for Industrial Applications
          </p>
          <div style={styles.headerDivider}></div>
        </div>
      </div>

      {/* Products Grid Section */}
      <div style={styles.productsSection}>
        <div style={styles.productsContainer}>
          <h2 style={styles.sectionTitle}>Our Product Range</h2>
          <div style={styles.productsGrid}>
            {products.map((product, index) => (
              <div 
                key={product.id}
                style={{
                  ...styles.productCard,
                  animationDelay: `${index * 150}ms`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                }}
              >
                {/* Product Image */}
                <div style={styles.imageContainer}>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    style={styles.productImage}
                  />
                  <div style={styles.imageOverlay}>
                    <div style={{
                      ...styles.productIcon,
                      backgroundColor: product.color
                    }}>
                      {product.icon}
                    </div>
                  </div>
                </div>

                {/* Product Content */}
                <div style={styles.productContent}>
                  <h3 style={styles.productName}>{product.name}</h3>
                  <p style={styles.productDescription}>{product.description}</p>
                  

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Info Section */}
      <div style={styles.technologySection}>
        <div style={styles.technologyContent}>
          <div style={styles.infoBlock}>
            <div style={styles.infoHeader}>
              <h3 style={styles.infoTitle}>Why Choose UWBix UWB Technology?</h3>
            </div>
            <p style={styles.infoDescription}>
              Our Ultra-Wideband (UWB) technology delivers centimeter-level accuracy in real-time positioning, 
              making it the most precise indoor location system available. Unlike other technologies, 
              UWB is immune to multipath interference and works reliably in harsh industrial environments.
            </p>
            
            <div style={styles.featuresGrid}>
              <div style={styles.feature}>
                <div style={styles.featureIcon}>
                  <Shield size={20} color="#10b981" />
                </div>
                <div>
                  <h4 style={styles.featureTitle}>Industrial Grade</h4>
                  <p style={styles.featureDesc}>Built for harsh environments</p>
                </div>
              </div>
              
              <div style={styles.feature}>
                <div style={styles.featureIcon}>
                  <Zap size={20} color="#f59e0b" />
                </div>
                <div>
                  <h4 style={styles.featureTitle}>Real-Time</h4>
                  <p style={styles.featureDesc}>Instant position updates</p>
                </div>
              </div>
              
              <div style={styles.feature}>
                <div style={styles.featureIcon}>
                  <Eye size={20} color="#3b82f6" />
                </div>
                <div>
                  <h4 style={styles.featureTitle}>Precision</h4>
                  <p style={styles.featureDesc}>Centimeter-level accuracy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerSection}>
            <h3 style={styles.footerTitle}>About us</h3>
            <p style={styles.footerDescription}>
              UWBix manufactures leading edge technologies for life and industry.
            </p>
          </div>
          
          <div style={styles.footerSection}>
            <div style={styles.contactInfo}>
              <a href="mailto:info@uwbix.com" style={styles.email}>info@uwbix.com</a>
              <div style={styles.address}>
                <p style={styles.addressLine}>Blumenstraße</p>
                <p style={styles.addressLine}>Blumenstraße</p>
                <p style={styles.addressLine}>GERMANY</p>
                <p style={styles.poweredBy}>Powered by E.K</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif"
  },
  
  headerSection: {
    background: 'linear-gradient(135deg, #1d3422ff 0%, #303330ff 100%)',
    padding: '60px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  headerContent: {
    textAlign: 'center',
    maxWidth: '800px',
    width: '100%',
    padding: '0 20px'
  },
  
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px'
  },
  
  logoIcon: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #22c55e, #10b981)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 16px rgba(34, 197, 94, 0.3)'
  },
  
  mainTitle: {
    fontSize: '3rem',
    fontWeight: '700',
    color: 'white',
    margin: 0,
    letterSpacing: '0.5px'
  },
  
  headerSubtitle: {
    fontSize: '1.25rem',
    color: '#d1d5db',
    fontWeight: '400',
    margin: 0,
    lineHeight: '1.6'
  },
  
  headerDivider: {
    width: '120px',
    height: '4px',
    background: 'linear-gradient(90deg, #22c55e, #10b981)',
    borderRadius: '2px',
    margin: '24px auto 0'
  },
  
  productsSection: {
    padding: '80px 0',
    display: 'flex',
    justifyContent: 'center'
  },
  
  productsContainer: {
    maxWidth: '1400px',
    width: '100%',
    padding: '0 40px'
  },
  
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#1f2937',
    textAlign: 'center',
    margin: '0 0 60px 0',
    letterSpacing: '0.5px'
  },
  
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '32px',
    alignItems: 'stretch'
  },
  
  productCard: {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.4s ease',
    cursor: 'pointer',
    animation: 'slideInUp 0.6s ease-out forwards',
    opacity: 0,
    transform: 'translateY(30px)',
    display: 'flex',
    flexDirection: 'column'
  },
  
  imageContainer: {
    position: 'relative',
    height: '220px',
    overflow: 'hidden'
  },
  
  productImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.4s ease'
  },
  
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.1))',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transition: 'opacity 0.3s ease'
  },
  
  productIcon: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    transform: 'scale(0.8)',
    transition: 'transform 0.3s ease'
  },
  
  productContent: {
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1
  },
  
  productName: {
    fontSize: '1.375rem',
    fontWeight: '600',
    color: '#1f2937',
    margin: '0 0 12px 0',
    lineHeight: '1.3'
  },
  
  productDescription: {
    fontSize: '1rem',
    color: '#6b7280',
    lineHeight: '1.6',
    margin: '0 0 24px 0',
    flexGrow: 1
  },
  
  productFooter: {
    display: 'flex',
    justifyContent: 'flex-start'
  },
  
  learnMoreButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '12px',
    color: 'white',
    fontSize: '0.9rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
  },
  
  buttonIcon: {
    transition: 'transform 0.3s ease'
  },
  
  technologySection: {
    background: 'rgba(255, 255, 255, 0.7)',
    padding: '60px 0',
    display: 'flex',
    justifyContent: 'center'
  },
  
  technologyContent: {
    maxWidth: '1200px',
    width: '100%',
    padding: '0 40px'
  },
  
  infoBlock: {
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(20px)',
    borderRadius: '20px',
    padding: '40px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.3)'
  },
  
  infoHeader: {
    background: 'rgba(3,29,16,0.97)',
    borderRadius: '12px',
    padding: '16px 24px',
    marginBottom: '24px',
    boxShadow: '0 4px 12px rgba(149, 225, 187, 0.3)'
  },
  
  infoTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: 'white',
    margin: 0,
    textAlign: 'center'
  },
  
  infoDescription: {
    fontSize: '1.125rem',
    color: '#4b5563',
    lineHeight: '1.7',
    margin: '0 0 32px 0',
    textAlign: 'center'
  },
  
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '24px'
  },
  
  feature: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '20px',
    background: 'rgba(248, 250, 252, 0.8)',
    borderRadius: '12px',
    border: '1px solid rgba(229, 231, 235, 0.5)'
  },
  
  featureIcon: {
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  },
  
  featureTitle: {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#1f2937',
    margin: '0 0 4px 0'
  },
  
  featureDesc: {
    fontSize: '0.9rem',
    color: '#6b7280',
    margin: 0
  },
  
  footer: {
    background: 'rgba(3,29,16,0.97)',
    color: '#f2f4f7',
    padding: '48px 0',
    boxShadow: '0 -2px 8px rgba(0,0,0,0.07)'
  },
  
  footerContent: {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '48px',
    padding: '0 48px'
  },
  
  footerSection: {
    flex: 1
  },
  
  footerTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#f2f4f7',
    margin: '0 0 16px 0',
    letterSpacing: '0.5px'
  },
  
  footerDescription: {
    fontSize: '1.1rem',
    color: '#b1edc7',
    lineHeight: '1.6',
    margin: 0,
    maxWidth: '400px'
  },
  
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'center'
  },
  
  email: {
    fontSize: '1.1rem',
    color: '#b1edc7',
    margin: 0,
    fontWeight: '500',
    textDecoration: 'none'
  },
  
  address: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    textAlign: 'center'
  },
  
  addressLine: {
    fontSize: '1rem',
    color: '#f2f4f7',
    margin: 0,
    lineHeight: '1.4'
  },
  
  poweredBy: {
    fontSize: '0.875rem',
    color: '#b1edc7',
    fontWeight: '500',
    margin: 0
  }
};

// CSS animations
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  @keyframes slideInUp {
    to { 
      opacity: 1; 
      transform: translateY(0); 
    }
  }
  
  .productCard:hover .productImage {
    transform: scale(1.05);
  }
  
  .productCard:hover .imageOverlay {
    opacity: 1;
  }
  
  .productCard:hover .productIcon {
    transform: scale(1);
  }
`;
document.head.appendChild(styleSheet);

export default Products;