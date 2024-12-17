import { useState } from 'react'
import './App.css'

function App() {

  const [age, setAge] = useState("");
  const [sex, setSex] = useState("male");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("sedentary");
  const [dri, setDri] = useState(null);


  const calculateDRI = () => {
    if (age && height && weight) {
      const baseCalories =
        sex === "male"
          ? 10 * parseFloat(weight) + 6.25 * parseFloat(height) - 5 * parseInt(age) + 5
          : 10 * parseFloat(weight) + 6.25 * parseFloat(height) - 5 * parseInt(age) - 161;

      const activityMultiplier = {
        sedentary: 1.2,
        light: 1.375,
        moderate: 1.55,
        active: 1.725,
        "very active": 1.9,
      }[activityLevel];

      const totalCalories = baseCalories * activityMultiplier;
      setDri(totalCalories.toFixed(2));
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="dri-calculator">
      <h1>Dietary Reference Intake Calculator</h1>
      <div className="form-group">
        <label htmlFor="age">Age (years):</label>
        <input
          id="age"
          name="age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter your age"
        />
      </div>
      <div className="form-group">
        <label htmlFor="sex">Sex:</label>
        <select
          id="sex"
          name="sex"
          value={sex}
          onChange={(e) => setSex(e.target.value)}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="height">Height (cm):</label>
        <input
          id="height"
          name="height"
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter your height"
        />
      </div>
      <div className="form-group">
        <label htmlFor="weight">Weight (kg):</label>
        <input
          id="weight"
          name="weight"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter your weight"
        />
      </div>
      <div className="form-group">
        <label htmlFor="activityLevel">Activity Level:</label>
        <select
          id="activityLevel"
          name="activityLevel"
          value={activityLevel}
          onChange={(e) => setActivityLevel(e.target.value)}
        >
          <option value="sedentary">Sedentary</option>
          <option value="light">Light Activity</option>
          <option value="moderate">Moderate Activity</option>
          <option value="active">Active</option>
          <option value="very active">Very Active</option>
        </select>
      </div>
      <button className="calculate-button" onClick={calculateDRI}>
        Calculate DRI
      </button>
      {dri && (
        <div className="result">
          <h3>Your DRI: {dri} kcal/day</h3>
        </div>
      )}
    </div>
  );
};

export default App
