import React from "react";
import '../styles/shoecollection.css';

function Shoes() {
  const shoeData = [
    {
      id: 1,
      name: "Nike",
      price: 20000,
      description: "Stylish Shoes",
      image: "/nike.jpg",
    },
    {
      id: 2,
      name: "Puma",
      price: 85000,
      description: "Stylish Shoes",
      image: "/puma.jpg",
    },
    {
      id: 3,
      name: "Gucci",
      price: 15000,
      description: "Stylish Shoes",
      image: "/gucci.jpg",
    },
    {
      id: 4,
      name: "Nike",
      price: 15000,
      description: "Stylish Shoes",
      image: "/nike2.jpg",
    },
    {
      id: 5,
      name: "Adidas",
      price: 19000,
      description: "Stylish Shoes",
      image: "/adidas.jpg",
    },
    {
      id: 7,
      name: "Deckers",
      price: 22000,
      description: "Stylish Shoes",
      image: "/deckers.jpg",
    },
    {
      id: 8,
      name: "Skechers",
      price: 24500,
      description: "Stylish Shoes",
      image: "/skechers.jpg",
    },
    {
      id: 9,
      name: "Jordan",
      price: 32000,
      description: "Stylish Shoes",
      image: "/jordan.jpg",
    },
    {
      id: 10,
      name: "Crocks",
      price: 100000,
      description: "Stylish Shoes",
      image: "/crock.jpg",
    },
  ];

  return (
    <div className="shoe-collection">
      <h1 className="fade-in">Shoe Collection</h1>
      <div className="shoes">
        {shoeData.map((shoe) => (
          <div key={shoe.id} className="shoe-card">
            <img src={shoe.image} alt={shoe.name}/>
            <h3>{shoe.name}</h3>
            <p>{shoe.description}</p>
            <div className="price">${shoe.price}</div>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shoes;
