

export function usePostCountryBD() {
  const handlePostCountry = async (country) => {
    try {
      const response = await fetch(`http://localhost:3001/countries/${country.code}`);
      if (response.ok) {
        const existingCountry = await response.json();
        alert(`El país con código ${country.code} ya existe en la base de datos`);
      } else {
        fetch("http://localhost:3001/countries", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(country),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`Error en la solicitud: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            alert("País creado con éxito");
            console.log("Respuesta de la API:", data);
          })
          .catch((error) => {
            console.error("Error en la solicitud:", error);
          });
      }
    } catch (error) {
      alert("Error al verificar el país");
      console.error("Error en la solicitud:", error);
    }
  }

  return {
    handlePostCountry
  };
}
