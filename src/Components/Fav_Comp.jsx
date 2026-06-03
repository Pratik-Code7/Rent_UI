import React from "react";

const Fav_Comp = () => {
  const properties = [
    {
      id: 1,
      title: "Modern Apartment",
      img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    },
    {
      id: 2,
      title: "Luxury Villa",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    },
    {
      id: 3,
      title: "Cozy Cottage",
      img: "https://images.unsplash.com/photo-1448630360428-65456885c650",
    },
    {
      id: 4,
      title: "City Penthouse",
      img: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    },
    {
      id: 5,
      title: "Beach House",
      img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },
    {
      id: 6,
      title: "Mountain Cabin",
      img: "https://images.unsplash.com/photo-1460317442991-0ec209397118",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-5">
      {properties.map((elem) => (
        <div
          key={elem.id}
          className="bg-white rounded-2xl overflow-hidden shadow-lg  flex flex-col md:flex-row"
        >
          {/* Image */}
          <div className="relative h-56 md:h-auto md:w-1/3">
            <img
              src={elem.img}
              alt={elem.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded text-sm">
              Saved
            </div>
          </div>

          {/* Content */}
          <div className="p-4 md:p-6 flex flex-col justify-between w-full">
            <div>
              <h2 className="text-lg font-bold">{elem.title}</h2>
              <div className="flex items-center  gap-2 mt-2 text-gray-500">
                <i className="ri-map-pin-2-fill"></i>
                <p className="text-sm text-gray-500 ">
                  Lorem ipsum dolor sit amet
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-3 text-sm text-gray-600">
                <span>1 Room</span>
                <span>2 Bath</span>
                <span>1200 sqft</span>
              </div>
            </div>

            {/* Price section */}
            <div className="mt-4 border-t pt-4 flex justify-between items-center">
              <p className="font-semibold">Rs $10000/mo</p>

              <button className="text-red-500">Remove</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Fav_Comp;
