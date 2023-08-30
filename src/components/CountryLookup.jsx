"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function CountryLookup() {
  const [country, setCountry] = useState("United States");

  useEffect(() => {
    fetchCountryUser();
  }, []);

  const fetchCountryUser = async () => {
    try {
      const res = await axios.get(
        `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      if (!res) return;
      setCountry(res.data.country);
    } catch (error) {
      console.error(error);
    }
  };

  return (
  <div>{country}</div>
  )
}
