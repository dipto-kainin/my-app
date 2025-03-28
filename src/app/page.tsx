"use client"

import { useEffect, useState } from "react";
import React from "react";

type data_ = {
  id: String;
  name: String;
  username: String;
  email: String;
  address: {
    street: String;
    suite: String;
    city: String;
    zipcode: String;
    geo: {
      lat: String;
      lng: String;
    };
  };
  phone: String;
  website: String;
  company: {
    name: String;
    catchPhrase: String;
    bs: String;
  };
};
type dataofUser = data_[]

export default function Home() {
  const [data, setdata] = useState<dataofUser>([]);
  const [dataToshow, setDataToshow] = useState<data_[]>([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const data = await fetch("api/getData");
        const response = await data.json();
        console.log(response);
        setdata(response)
        setDataToshow(response.slice(0, 3));
      } catch (error) {
        console.log(error);

      }
    }
    fetchdata();
  }, [])
  return (
    <div className="flex justify-center items-center flex-col">
      {
        dataToshow && dataToshow.map((item) => (
          <div key={item.id.toString()} className="mb-20 text-center">
            <h2>{item.name}</h2>
            <p>Username: {item.username}</p>
            <p>Email: {item.email}</p>
            <p>Phone: {item.phone}</p>
            <p>Website: {item.website}</p>
            <h3>Address:</h3>
            <p>Street: {item.address.street}</p>
            <p>Suite: {item.address.suite}</p>
            <p>City: {item.address.city}</p>
            <p>Zipcode: {item.address.zipcode}</p>
            <p>Geo: {item.address.geo.lat}, {item.address.geo.lng}</p>
            <h3>Company:</h3>
            <p>Name: {item.company.name}</p>
            <p>Catch Phrase: {item.company.catchPhrase}</p>
            <p>BS: {item.company.bs}</p>
          </div>
        ))
      }
      <button
        onClick={() => {
          setDataToshow(data?.slice(0, dataToshow.length + 3))
        }}
        className={`mb-20 px-2.5 hover:cursor-pointer ${dataToshow.length === data.length
          ? "bg-gray-300 text-gray-600"
          : "bg-amber-50 text-black"
          }`}
        disabled={dataToshow.length === data.length}
      >
        show more
      </button>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-2xl font-bold">My Profile</h1>
        <h2 className="text-xl font-semibold">John Doe</h2>
        <p className="text-gray-600">Web Developer</p>
      </div>
    </div>
  );
}
