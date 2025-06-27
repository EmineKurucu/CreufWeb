import React from 'react';
import { Mail, Globe, MapPin, Phone } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="min-h-screen" style={{ background: '#f3f4f6' }}>
      {/* Header Kısmı */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 opacity-70"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-75"></div>
        <div className="absolute bottom-10 left-1/2 w-24 h-24 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-150"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-800 via-green-900 to-blue-900 bg-clip-text text-transparent mb-8 animate-slideInUp">
            Contact Us
          </h1>
          <p className="text-2xl text-gray-700 mb-16 animate-slideInUp animation-delay-200 font-light">
            We are here to help
          </p>
          
          {/* Contact Information Kısmı */}
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-10 border border-white/50 animate-slideInUp animation-delay-400 hover:shadow-3xl transition-all duration-500 hover:scale-105">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-left group">
                <div className="flex items-center space-x-3 text-lg text-gray-700 hover:text-indigo-600 transition-colors">
                  <Mail className="w-6 h-6 text-indigo-500 group-hover:scale-110 transition-transform" />
                  <p>
                    <strong className="text-gray-900">Email:</strong> 
                    <a href="mailto:info@creuf.com" className="ml-2 hover:text-indigo-600 transition-colors">
                      info@creuf.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="text-left group">
                <div className="flex items-center space-x-3 text-lg text-gray-700 hover:text-indigo-600 transition-colors">
                  <Globe className="w-6 h-6 text-indigo-500 group-hover:scale-110 transition-transform" />
                  <p>
                    <strong className="text-gray-900">Website:</strong> 
                    <a href="https://www.creuf.com" target="_blank" rel="noopener noreferrer" className="ml-2 hover:text-indigo-600 transition-colors">
                      www.creuf.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Officlerin Olduğu kısım */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16 animate-slideInUp">
            Our Global Offices
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Germany/EU */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-slideInUp animation-delay-200 group">
              <div className="bg-gradient-to-r from-emerald-800 via-green-900 to-blue-900 text-white p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-full -translate-y-10 translate-x-10"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/20 rounded-full translate-y-8 -translate-x-8"></div>
                <h3 className="text-2xl font-bold relative z-10 group-hover:scale-110 transition-transform">Germany/EU Office</h3>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-2 gap-4">
                  {/* Map */}
                  <div className="col-span-1">
                    <div className="h-40 rounded-2xl overflow-hidden shadow-inner group-hover:shadow-lg transition-shadow mb-2">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2431.123456789!2d9.5891234!3d52.7001234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b2b123456789ab%3A0x123456789abcdef!2sBahnhofstraße%2061%2C%2029693%20Hodenhagen%2C%20Germany!5e0!3m2!1str!2str!4v1710000000000!5m2!1str!2str"
                        width="100%"
                        height="100%"
                        style={{ border: 0, borderRadius: '16px' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Germany Office Map"
                      />
                    </div>
                    <a href="https://maps.app.goo.gl/oDEd3bRonrgpJV8P6" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline text-sm">Haritada Aç</a>
                  </div>
                  
                  {/* Address */}
                  <div className="col-span-1 text-gray-700 space-y-2 flex flex-col justify-center">
                    <p className="font-bold text-gray-900 mb-3 text-lg">Germany / EU</p>
                    <p className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-amber-500" />Bahnhofstraße 61</p>
                    <p className="ml-6">29693 Hodenhagen</p>
                    <p className="ml-6 font-semibold text-amber-600">GERMANY</p>
                  </div>
                </div>
              </div>
            </div>

            {/* USA Office */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-slideInUp animation-delay-400 group">
              <div className="bg-gradient-to-r from-blue-900 via-emerald-800 to-green-900 text-white p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-full -translate-y-10 translate-x-10"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/20 rounded-full translate-y-8 -translate-x-8"></div>
                <h3 className="text-2xl font-bold relative z-10 group-hover:scale-110 transition-transform">USA Office</h3>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-2 gap-4">
                  {/* Map*/}
                  <div className="col-span-1">
                    <div className="h-40 rounded-2xl overflow-hidden shadow-inner group-hover:shadow-lg transition-shadow mb-2">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789!2d-122.4001234!3d37.7931234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580123456789b%3A0x123456789abcdef!2s353%20Sacramento%20St%20Ste%201812%2C%20San%20Francisco%2C%20CA%2094111%2C%20USA!5e0!3m2!1str!2str!4v1710000000000!5m2!1str!2str"
                        width="100%"
                        height="100%"
                        style={{ border: 0, borderRadius: '16px' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="USA Office Map"
                      />
                    </div>
                    <a href="https://g.co/kgs/EBWzkhY" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline text-sm">Haritada Aç</a>
                  </div>
                  
                  {/* Address */}
                  <div className="col-span-1 text-gray-700 space-y-2 flex flex-col justify-center">
                    <p className="font-bold text-gray-900 mb-3 text-lg">Address: USA</p>
                    <p className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-blue-500" />353 Sacramento St Ste 1812</p>
                    <p className="ml-6">San Francisco 94111 CA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* UK Office */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-slideInUp animation-delay-600 group">
              <div className="bg-gradient-to-r from-green-900 via-blue-900 to-emerald-800 text-white p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-full -translate-y-10 translate-x-10"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/20 rounded-full translate-y-8 -translate-x-8"></div>
                <h3 className="text-2xl font-bold relative z-10 group-hover:scale-110 transition-transform">UK Office</h3>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-2 gap-4">
                  {/* Map*/}
                  <div className="col-span-1">
                    <div className="h-40 rounded-2xl overflow-hidden shadow-inner group-hover:shadow-lg transition-shadow mb-2">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2431.123456789!2d-0.4181234!3d51.6551234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766123456789ab%3A0x123456789abcdef!2s59%20Euston%20Ave%2C%20Watford%20WD18%207SL%2C%20UK!5e0!3m2!1str!2str!4v1710000000000!5m2!1str!2str"
                        width="100%"
                        height="100%"
                        style={{ border: 0, borderRadius: '16px' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="UK Office Map"
                      />
                    </div>
                    <a href="https://maps.app.goo.gl/sJMm5MCfMurnMZix5" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline text-sm">Haritada Aç</a>
                  </div>
                  
                  {/* Address */}
                  <div className="col-span-1 text-gray-700 space-y-2 flex flex-col justify-center">
                    <p className="font-bold text-gray-900 mb-3 text-lg">Address: UK</p>
                    <p className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-emerald-500" />59 Euston Avenue</p>
                    <p className="ml-6">Watford WD18 7SLZ</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer spacing */}
      <div className="h-16 bg-gradient-to-r from-indigo-50 to-purple-50"></div>
      
      {/* Footer */}
      <div style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerSection}>
            <h3 style={styles.footerTitle}>About us</h3>
            <p style={styles.footerDescription}>
              Creuf manufactures leading edge technologies for life and industry.
            </p>
          </div>
          <div style={styles.footerSection}>
            <div style={styles.contactInfo}>
              <a href="mailto:info@creuf.com" style={styles.email}>info@creuf.com</a>
              <div style={styles.address}>
                <p style={styles.addressLine}>Bahnhofstraße 61</p>
                <p style={styles.addressLine}>29693 Hodenhagen</p>
                <p style={styles.addressLine}>GERMANY</p>
                <p style={styles.poweredBy}>Powered by E.K</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 30px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
            transform: translate3d(0, 0, 0);
          }
          40%, 43% {
            animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
            transform: translate3d(0, -8px, 0);
          }
          70% {
            animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
            transform: translate3d(0, -4px, 0);
          }
          90% {
            transform: translate3d(0, -2px, 0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        
        .animate-slideInUp {
          animation: slideInUp 0.6s ease-out;
        }
        
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        
        .animation-delay-100 {
          animation-delay: 0.1s;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
        
        .backdrop-blur-lg {
          backdrop-filter: blur(16px);
        }
        
        .backdrop-blur-sm {
          backdrop-filter: blur(4px);
        }
      `}</style>
    </div>
  );
};

const styles = {
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

export default ContactUs;