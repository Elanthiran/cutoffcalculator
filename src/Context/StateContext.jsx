import { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext();

export const UseCutOff = () => useContext(StateContext);

export const CutOffProvider = ({ children }) => {
  const [data, setData] = useState(
    localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []
  );
  const [mathematics, setMathematics] = useState("");
  const [physics, setPhysics] = useState("");
  const [chemistry, setChemistry] = useState("");
  const [total, setTotal] = useState(null);
  const [course, setCourse] = useState("");
  const [previewImage, setPreviewImage] = useState();
  const [name, setName] = useState("");

  // Update local storage when data or previewImage changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(data));
    if (previewImage) {
      localStorage.setItem("image", previewImage);
      // console.log("Image saved to localStorage:", previewImage); // Log the saved image URL
    }
  }, [data, previewImage]);
  

  function buttonClick(e) {
    e.preventDefault();

    // Ensure inputs are valid numbers and within the range 0-100
    if (
      mathematics <= 100 &&
      physics <= 100 &&
      chemistry <= 100 &&
      mathematics >= 0 &&
      physics >= 0 &&
      chemistry >= 0
    ) {
      const newMathematics = mathematics / 1;
      const newPhysics = physics / 2;
      const newChemistry = chemistry / 2;
      const sum = newMathematics + newPhysics + newChemistry;
      setTotal(sum.toFixed(2));
      if (sum >= 190) {
        setCourse("CSC");
      } else if (sum >= 180 && sum < 190) {
        setCourse("ECE");
      } else if (sum >= 170 && sum < 180) {
        setCourse("EEE");
      } else if (sum >= 160 && sum < 170) {
        setCourse("MECH");
      } else if (sum >= 130 && sum < 160) {
        setCourse("CIVIL");
      } else {
        setCourse("Not Eligible");
      }
    } else {
      alert("Values should be between 0 and 100!");
      setCourse("");
      setTotal("");
    }
  }

  return (
    <StateContext.Provider
      value={{
        name,
        setName,
        data,
        setData,
        mathematics,
        setMathematics,
        physics,
        setPhysics,
        chemistry,
        setChemistry,
        previewImage,
        setPreviewImage,
        total,
        setTotal,
        course,
        setCourse,
        buttonClick,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
