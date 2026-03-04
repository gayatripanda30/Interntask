import React from "react";
import room1 from "../../assets/image1.png";
import room2 from "../../assets/image2.png";
import room3 from "../../assets/image3.png";
import room4 from "../../assets/image4.png";
import room5 from "../../assets/image5.png";
import room6 from "../../assets/image6.png";
const properties = [
  {
    id: 1,
    image: room1,
    location: "Nairobi, Kenya",
    title: "Sky Apartment in Nairobi",
    details: "2 beds | 2 bedroom | 1 living room | 1 bathroom",
    price: 250,
    rating: 4.6,
  },
  {
    id: 2,
    image: room2,
    location: "Mombasa, Kenya",
    title: "Beach View Luxury Room",
    details: "1 bed | 1 bedroom | 1 bathroom",
    price: 200,
    rating: 4.8,
  },
  {
    id: 3,
    image: room3,
    location: "Kisumu, Kenya",
    title: "Modern City Apartment",
    details: "3 beds | 2 bedroom | 2 bathroom",
    price: 300,
    rating: 4.9,
  },
  {
    id: 4,
    image: room4,
    location: "Mombasa, Kenya",
    title: "Luxury Beachfront Villa",
    details: "4 beds | 3 bedroom | 2 living room | 2 bathroom",
    price: 450,
    rating: 4.6,
  },
  {
    id: 5,
    image: room5,
    location: "Nairobi, Kenya",
    title: "Sky Apartment in Nairobi",
    details: "2 beds | 2 bedroom | 1 living room | 1 bathroom",
    price: 250,
    rating: 4.6,
  },
  {
    id: 6,
    image: room6,
    location: "Nairobi, Kenya",
    title: "Modern Loft Apartment",
    details: "1 bed | 1 bedroom | 1 living room | 1 bathroom",
    price: 180,
    rating: 4.6,
  },
];
const PropertyList = ({ searchTerm = "" }) => {
  const filteredProperties = properties.filter(
    (property) =>
      property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-6xl px-6 mx-auto">
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredProperties.map((property) => (
            <div key={property.id}
              className="overflow-hidden transition bg-white border-2 border-gray-300 shadow-lg rounded-3xl hover:scale-105">
              <img src={property.image} alt={property.title}
                className="object-cover w-full h-48" />
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800">
                  {property.location}
                </h3>
                <p className="mt-1 text-gray-600">
                  {property.title}
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  {property.details}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-lg font-semibold text-blue-600">
                    € {property.price}/night
                  </span>
                  <span className="font-medium text-yellow-500">
                    ⭐ {property.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default PropertyList;