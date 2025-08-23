import React from 'react';
import { UseCutOff } from '../Context/StateContext';
import "./CardProfile.css";
import { useNavigate } from 'react-router-dom';

const CardProfile = () => {
  const {
    buttonClick,
    data, setData,
    name, setName,
    mathematics, setMathematics,
    physics, setPhysics,
    chemistry, setChemistry,
    total, setTotal,
    course, setCourse,
    previewImage, setPreviewImage
  } = UseCutOff();

  const navigate = useNavigate();

  // Handle image upload
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreviewImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Add new data
  const add = (e) => {
    e.preventDefault();

    if (!name || mathematics === "" || physics === "" || chemistry === "" || !previewImage || total === null || !course) {
      alert("Please fill all fields, upload an image, and click Calculate CutOff");
      return;
    }

    const id = data.length ? data[data.length - 1].num + 1 : 1;

    const newData = {
      num: id,
      name,
      image: previewImage,
      total,
      course,
    };

    setData([...data, newData]);

    // Clear form
    setName('');
    setMathematics('');
    setPhysics('');
    setChemistry('');
    setPreviewImage('');
    setTotal(null);
    setCourse('');

    navigate('/All');
  };

  return (
    <div className='container'>
      <div className='cutoff-page'>
        <div className="cutoff-profile" style={{ position: "relative" }}>
          
          {/* ✅ View All Button inside profile */}
          <div style={{ position: 'absolute', top: 1,start:1}}>
            <button type="button" className="btn" onClick={() => navigate("/All")}>View All</button>
          </div>

          {/* Profile Image */}
          <div className="profile">
            <img
              src={previewImage || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
              alt="Profile"
              className='img'
            />
            <label htmlFor='file-upload' className="update">Update Image</label>
            <input
              type="file"
              accept="image/jpeg, image/jpg, image/png"
              id='file-upload'
              className='image'
              onChange={handleUpload}
            />
          </div>

          {/* Form */}
          <form className="cutoff-form" onSubmit={(e) => buttonClick(e)}>
            <p className="cutoff-head"><strong>CutOff Calculator</strong></p>

            <div className="input-container">
              <label>Name:</label>
              <input
                type="text"
                className="input-text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="input-container">
              <label>Mathematics:</label>
              <input
                type="number"
                className="input-text"
                value={mathematics}
                onChange={(e) => setMathematics(Number(e.target.value))}
                min={0}
                max={100}
                required
              />
            </div>

            <div className="input-container">
              <label>Physics:</label>
              <input
                type="number"
                className="input-text"
                value={physics}
                onChange={(e) => setPhysics(Number(e.target.value))}
                min={0}
                max={100}
                required
              />
            </div>

            <div className="input-container">
              <label>Chemistry:</label>
              <input
                type="number"
                className="input-text"
                value={chemistry}
                onChange={(e) => setChemistry(Number(e.target.value))}
                min={0}
                max={100}
                required
              />
            </div>

            {/* Buttons */}
            <div className='button-type'>
              <button type="submit" className="btn">Calculate CutOff</button>
              <button type="button" className="btn" onClick={add}>Add</button>
            </div>

            {/* Display CutOff */}
            {total !== null && (
              <div className="output-container">
                <p>Your CutOff is: {total}</p>
                <p>Course Status: {course}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
