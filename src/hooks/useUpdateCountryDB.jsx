import { useState } from "react";
import { toast } from "react-toastify";



function useUpdateCountryDB() {
  const [newCountry, setNewCountry] = useState({});
  function handleUpdateCountry(country) {
    console.log("country", newCountry);
    fetch(`http://localhost:3001/countries/country/${country.code}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCountry),
    })
      .then((response) => {
        if (response.ok) {
          toast.success("Country updated successfully");
        } else {
          toast.error("Country could not be updated");
        }
      })
      .catch((error) => console.error(error));
  }

  return { handleUpdateCountry, setNewCountry };
}

export default useUpdateCountryDB;
