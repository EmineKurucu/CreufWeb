import React, { useEffect } from "react";
import { BarChart3, Users, Truck, TrendingUp, MapPin, Shield, Zap, Eye } from "lucide-react";
import depo2 from "../assets/depo2.jpg";
import power from "../assets/power.jpg";
import video from "../assets/video.mp4";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#uwb-technology") {
      const el = document.getElementById("uwb-technology");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const features = [
    {
      icon: <MapPin size={24} />,
      title: "Asset Tracking",
      description: "Monitor the real-time location of valuable assets to optimize logistics and reduce losses.",
      color: "#3b82f6"
    },
    {
      icon: <Users size={24} />,
      title: "Employee Tracking", 
      description: "Boost workplace safety and operational efficiency with real-time personnel tracking and smart resource allocation.",
      color: "#10b981"
    },
    {
      icon: <Truck size={24} />,
      title: "Forklift Tracking",
      description: "Improve safety and efficiency by tracking forklifts and driver behavior to identify bottlenecks and ensure accountability.",
      color: "#f59e0b"
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Analytics & Operational Excellence",
      description: "Utilize Creuflink to analyze tracking data, export reports, and unlock continuous performance improvements.",
      color: "#8b5cf6"
    }
  ];

  return (
    <div>
      <div style={styles.mainContainer}>
        {/*Bilgi kısmı */}
        <div style={styles.infoPanelContainer}>
          <div style={styles.panel}>
            {/* Header */}
            <div style={styles.header}>
              <div style={styles.logoContainer}>
                <div style={styles.logoIcon}>
                  <Eye size={20} color="white" />
                </div>
                <h2 style={styles.title}>Welcome to UWBix</h2>
              </div>
              <p style={styles.subtitle}>
              Precision Real-Time Positioning & Tracking Solutions
            </p>
              <div style={styles.divider}></div>
          </div>

          {/* Özellikler */}
            <div style={styles.featuresContainer}>
            {features.map((feature, index) => (
              <div 
                key={index}
                style={{ 
                    ...styles.featureCard,
                    animationDelay: `${index * 100}ms`
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.08)';
                  }}
                >
                  <div style={styles.cardContent}>
                    <div style={{
                      ...styles.iconContainer,
                      backgroundColor: feature.color
                    }}>
                      <div style={styles.icon}>
                      {feature.icon}
                    </div>
                  </div>
                  
                    <div style={styles.textContent}>
                      <h3 style={styles.featureTitle}>
                      {feature.title}
                    </h3>
                      <p style={styles.featureDescription}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom accent */}
            <div style={styles.bottomAccent}>
              <Shield size={16} color="#6b7280" />
              <span style={styles.bottomText}>Secure & Reliable Tracking</span>
            </div>
          </div>
        </div>

        {/*Video ve fotoğraf ekleme */}
        <div style={styles.rightSection}>
          {/* Arka planda fotoğraf var*/}
          <div style={styles.backgroundPhoto}>
            <img 
              src="src/assets/fabrika.jpg" 
              alt="Background" 
              style={styles.photoImage}
            />
            <div style={styles.photoOverlay}></div>
          </div>
          
          {/* Video fotoğrafın üstünde */}
          <div style={styles.videoContainer}>
            <video 
              style={styles.video}
              autoPlay 
              muted 
              loop 
              playsInline
            >
              <source src={video} type="video/mp4" />
            </video>
            <div style={styles.videoOverlay}></div>
          </div>
        </div>
      </div>

      {/* UWB Technology Section Title */}
      <div style={styles.sectionTitleContainer} id="uwb-technology">
        <h2 style={styles.sectionTitle}>UWB Technology</h2>
        <div style={styles.sectionTitleDivider}></div>
      </div>

      {/* Bilgi Kısmı */}
      <div style={styles.bottomInfoSection}>
        <div style={styles.bottomContent}>
          {/* Metin */}
          <div style={styles.infoBlock}>
            <div style={styles.infoHeader}>
              <h3 style={styles.infoTitle}>What is RTLS Real-time Locating System</h3>
            </div>
            <p style={styles.infoDescription}>
              RTLS is mainly used to identify and locate the position of people, assets and other objects in real time, usually used within a building, factory or similar contained areas.
            </p>
            
            <div style={styles.infoHeader}>
              <h3 style={styles.infoTitle}>How does UWB RTLS work?</h3>
            </div>
            <p style={styles.infoDescription}>
              The UWB RTLS is the most precise and reliable indoor location technology ever. It uses fixed anchors to measure multiple distances with the mobile tag and a computer calculates the exact position of the tag in real-time. Distances are evaluated using the propagation speed of a short radio signal, which is extremely fast and precise.
            </p>
          </div>
          
          {/* Resmim1*/}
          <div style={styles.imageContainer}>
            <img 
              src="/src/assets/fabrika.jpg" 
              alt="Depo" 
              style={styles.depoImage}
            />
          </div>
        </div>
      </div>

      {/* Bigi */}
      <div style={styles.bottomInfoSection}>
        <div style={styles.secondBottomContent}>
          {/*Depo2 fotoğraf */}
          <div style={{ display: 'flex', alignItems: 'stretch', marginRight: '32px' }}>
            <img 
              src={depo2} 
              alt="Depo 2" 
              style={{ 
                height: '650px', 
                width: '600px', 
                minWidth: '220px', 
                maxWidth: '800px', 
                objectFit: 'cover', 
                borderRadius: '16px', 
                boxShadow: '0 4px 16px rgba(0,0,0,0.10)'
              }} 
            />
          </div>
          <div style={styles.centeredInfoBlock}>
            <div style={styles.infoHeader}>
              <h3 style={styles.infoTitle}>Industrial RTLS Applications</h3>
            </div>
            <p style={styles.infoDescription}>
              Since GPS or similar outdoor location systems cannot be used indoors, UWB technology is the best alternative when industrial applications of RTLS arise. UWB tags are so immune to structural and other surrounding materials present in a factory or a warehouse. Positioning of a worker or an asset can be visible in the system with satisfying confidence. During a normal operation, positioning of people, forklifts and important assets can give great insight for understanding the true flow of operation. The provided observability enables a better planning and increased productivity.
            </p>
            <p style={styles.infoDescription}>
              Tracking the flow of the production or the lifecycle of an asset can yield solid KPI's and overall system ratings. Bottlenecks can be identified and idle resources can be utilized just-in-time.
            </p>
            
            <div style={styles.infoHeader}>
              <h3 style={styles.infoTitle}>Indoor Positioning on Emergency Situations</h3>
            </div>
            <p style={styles.infoDescription}>
              Last known locations of the people on a search and rescue operation can be crucial. In case of a fire and other unexpected situations, people can be trapped or lose consciousness so not to mobilize themselves or to respond to a rescue attempt. RTLS gives the latest acquired location which greatly reduces a search effort and shortens the most critical response time.
            </p>
          </div>
        </div>
      </div>

      {/*Atex kısmı*/}
      <div style={styles.bottomInfoSection}>
        <div style={styles.thirdBottomContent}>
          <div style={styles.atexInfoBlock}>
            <div style={styles.infoHeader}>
              <h3 style={styles.infoTitle}>Atex Certified Ex-Proof Trackers</h3>
            </div>
            <p style={styles.infoDescription}>
              Facilities with explosion risks, require a certified tracking product to be used in Atex environments. Tracker device, shall not cause any risk for the hazardous environment and the device also must be durable against harsh industrial conditions. Creuf ex-proof trackers are Zone 1 and 21 certified. Trackers manufactured with flame retardant IP67 enclosures to be used in chemical facilities with explosive vapours and flammable fine-dust environments.
            </p>
            <p style={styles.infoDescription}>
              CREUF's industry leading ex-proof trackers also include vibration haptic feedback to the user in any noisy environment. The device can also be charged via contactless charging without a need of a lit or a connector which enables a totally sealed device enclosure.
            </p>
          </div>
          <div style={styles.powerImageContainer}>
            <img 
              src={power} 
              alt="Power" 
              style={styles.powerImage}
            />
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
                <p style={styles.addressLine}>Blumenstra</p>
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
  mainContainer: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    position: 'relative',
    background: '#f3f4f6'
  },
  infoPanelContainer: {
    flex: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px'
  },
  panel: {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '24px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    padding: '32px',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",
    maxWidth: '500px',
    width: '100%'
  },
  rightSection: {
    flex: '1',
    position: 'relative',
    overflow: 'hidden'
  },
  backgroundPhoto: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1
  },
  photoImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'brightness(0.7) contrast(1.2)'
  },
  photoOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.3), rgba(16, 185, 129, 0.2))',
    zIndex: 2
  },
  videoContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '75%',
    height: '75%',
    zIndex: 3,
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
  },
  video: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  videoOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.1)',
    pointerEvents: 'none'
  },
  header: {
    textAlign: 'center',
    marginBottom: '32px'
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    marginBottom: '16px'
  },
  logoIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #22c55e, #10b981)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(34, 197, 94, 0.3)'
  },
  title: {
    fontSize: '2rem',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #059669, #10b981)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    margin: 0
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#4b5563',
    fontWeight: '500',
    margin: 0
  },
  divider: {
    width: '64px',
    height: '4px',
    background: 'linear-gradient(90deg, #22c55e, #10b981)',
    borderRadius: '2px',
    margin: '16px auto 0'
  },
  featuresContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  featureCard: {
    background: 'rgba(255, 255, 255, 0.7)',
    border: '1px solid rgba(229, 231, 235, 0.5)',
    borderRadius: '16px',
    padding: '20px',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
    animation: 'slideInLeft 0.6s ease-out forwards',
    opacity: 0,
    transform: 'translateX(-20px)'
  },
  cardContent: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px'
  },
  iconContainer: {
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    transition: 'transform 0.3s ease'
  },
  icon: {
    color: 'white'
  },
  textContent: {
    flex: 1
  },
  featureTitle: {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#1f2937',
    margin: '0 0 8px 0',
    transition: 'color 0.3s ease'
  },
  featureDescription: {
    fontSize: '0.9rem',
    color: '#6b7280',
    lineHeight: '1.6',
    margin: 0
  },
  bottomAccent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    marginTop: '32px',
    paddingTop: '24px',
    borderTop: '1px solid rgba(229, 231, 235, 0.5)'
  },
  bottomText: {
    fontSize: '0.875rem',
    color: '#6b7280',
    fontWeight: '500'
  },
  sectionTitleContainer: {
    width: '100%',
    background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)',
    padding: '40px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: 'white',
    margin: 0,
    textAlign: 'center',
    fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",
    letterSpacing: '0.5px'
  },
  sectionTitleDivider: {
    width: '120px',
    height: '4px',
    background: 'linear-gradient(90deg, #22c55e, #10b981)',
    borderRadius: '2px',
    marginTop: '16px'
  },
  bottomInfoSection: {
    width: '100%',
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    padding: '40px 0',
    fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomContent: {
    maxWidth: '1400px',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    gap: '0px',
    marginLeft: '0px',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  infoBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(20px)',
    borderRadius: '20px',
    padding: '32px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.3)'
  },
  infoHeader: {
    background: 'rgba(3,29,16,0.97)',
    borderRadius: '12px',
    padding: '12px 16px',
    boxShadow: '0 4px 12px rgba(149, 225, 187, 0.3)'
  },
  infoTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: 'white',
    margin: 0,
    textAlign: 'center'
  },
  infoDescription: {
    fontSize: '1.1rem',
    color: '#4b5563',
    lineHeight: '1.7',
    margin: 0
  },
  imageContainer: {
    flex: '0 0 700px',
    height: '600px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    marginLeft: '40px',
    marginRight: '0px'
  },
  depoImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  secondBottomContent: {
    maxWidth: '1400px',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: '32px'
  },
  centeredInfoBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(20px)',
    borderRadius: '20px',
    padding: '32px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    maxWidth: '700px',
    width: '100%'
  },
  thirdBottomContent: {
    maxWidth: '1400px',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: '32px'
  },
  atexInfoBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(20px)',
    borderRadius: '20px',
    padding: '32px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    maxWidth: '800px',
    width: '100%'
  },
  powerImageContainer: {
    flex: '0 0 600px',
    height: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    marginLeft: '40px',
    marginRight: '0px'
  },
  powerImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  footer: {
    background: 'rgba(3,29,16,0.97)',
    color: '#f2f4f7',
    padding: '48px 0',
    fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",
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
    alignItems: 'center',
    marginLeft: '-200px'
  },
  email: {
    fontSize: '1.1rem',
    color: '#b1edc7',
    margin: 0,
    fontWeight: '500'
  },
  address: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
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

// CSS animation ekleme
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

  @keyframes slideInLeft {
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
`;
document.head.appendChild(styleSheet);

export default Home;