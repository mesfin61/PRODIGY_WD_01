import React from 'react';
import '../styles/featured.css';

function Featured() {
  const vehicles = [
    {
      id: 1,
      name: '2023 Porsche 911 Turbo S',
      price: '$203,500',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      specs: ['3.0L Turbo', '640 HP', '0-60 in 2.6s', 'AWD']
    },
    {
      id: 2,
      name: '2023 Range Rover Autobiography',
      price: '$158,000',
      image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      specs: ['4.4L V8', '523 HP', 'Luxury Package', '4WD']
    },
    {
      id: 3,
      name: '2023 Audi RS e-tron GT',
      price: '$142,400',
      image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      specs: ['Electric', '637 HP', '0-60 in 3.1s', 'AWD']
    }
  ];

  return (
    <section className="featured">
      <div className="section-header">
        <h2 className="section-subtitle">Premium Selection</h2>
        <h3 className="section-title">Featured Vehicles</h3>
        <p className="section-description">
          Explore our curated collection of exceptional automobiles
        </p>
      </div>

      <div className="vehicles-grid">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="vehicle-card">
            <div className="vehicle-image">
              <img src={vehicle.image} alt={vehicle.name} />
              <div className="price-badge">{vehicle.price}</div>
            </div>
            <div className="vehicle-details">
              <h4 className="vehicle-name">{vehicle.name}</h4>
              <ul className="vehicle-specs">
                {vehicle.specs.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
              <button className="inquiry-button">
                Make an Inquiry
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="view-all-container">
        <a href="/inventory" className="view-all-button">
          View Full Inventory →
        </a>
      </div>
    </section>
  );
};

export default Featured;