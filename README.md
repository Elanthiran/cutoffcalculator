# 🎓 CutOffCalculator

This is a **React-based web application** for calculating student cutoff marks based on Mathematics, Physics, and Chemistry scores.  
It allows users to **upload profile images, calculate cutoff, determine eligible courses, and store profiles** locally.  
Students can be viewed, categorized by course, and deleted as needed.

---

## ✨ Features

- 📸 **Profile Management** – Add student details with image upload.
- 🧮 **CutOff Calculator** – Calculates cutoff based on given rules:
  - `Math + (Physics / 2) + (Chemistry / 2)`
- 🎯 **Course Allocation** – Suggests course based on cutoff:
  - ≥190 → CSC  
  - 180–189 → ECE  
  - 170–179 → EEE  
  - 160–169 → MECH  
  - 130–159 → CIVIL  
  - <130 → Not Eligible
- 📂 **Data Persistence** – Stores student data in **localStorage**.
- 🗂️ **Course Filtering** – View students categorized into CSC, ECE, EEE, MECH, CIVIL.
- 🗑️ **Delete Functionality** – Remove profiles permanently.
- 📱 **Responsive Design** – Optimized for desktop & mobile.

---

## 📂 Project Structure

├── src
│ ├── components
│ │ ├── All.jsx
│ │ ├── Card.jsx
│ │ ├── CardProfile.jsx
│ │ ├── Civil.jsx
│ │ ├── Csc.jsx
│ │ ├── Ece.jsx
│ │ ├── Eee.jsx
│ │ ├── Mech.jsx
│ │ ├── card.css
│ │ └── CardProfile.css
│ ├── Context
│ │ └── StateContext.jsx
│ ├── App.jsx
│ ├── index.jsx
│ ├── index.css
│ └── App.css
├── package.json
├── README.md

---

## ⚙️ Installation & Run Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Elanthiran/cutoffcalculator.git
   cd cutoffcalculator
   ```
Install dependencies
```bash
npm install
```

Start the development server
```bash
npm run dev
```
---

## 🚀 Usage

1. Open the app.

2. Enter student details (Name, Marks).

3. Upload a profile picture.

4. Click Calculate CutOff → shows cutoff and allocated course.

5. Click Add → saves the student profile.

6. Navigate to View All or specific course pages (CSC, ECE, EEE, MECH, CIVIL).

7. Delete profiles when no longer needed.

---

## 📸 Screenshots

🔹 Home / CutOff Calculator
<img width="826" height="817" alt="image" src="https://github.com/user-attachments/assets/76b2df75-2aa1-4a93-b7ed-875ae7c49605" />


🔹 All Students
<img width="1900" height="761" alt="image" src="https://github.com/user-attachments/assets/d324a7b2-12a9-4d9b-ac57-b51e3898cca6" />



🔹 Course-wise View
<img width="1830" height="828" alt="image" src="https://github.com/user-attachments/assets/ed9e9dce-72a7-4759-8254-72ad74c8c566" />


---

## 🛠️ Tech Stack

- Frontend: React.js, React Router, Context API

- Styling: CSS3, Responsive Design

- Storage: LocalStorage

## 🔮 Future Improvements
- 🔑 User authentication (login/register).

- ☁️ Backend integration (MongoDB, Express, Node.js).

- 📊 Export reports (PDF/Excel).

- 🎨 UI enhancements with Material-UI / TailwindCSS.

- 🔍 Search & Filter students by name or marks.

---

## 🤝 Contributing
Contributions are welcome!

- Fork the repo

- Create a new branch (feature-new)

- Commit your changes

- Push the branch

  ---

## 📄 License
This project is licensed under the MIT License 
