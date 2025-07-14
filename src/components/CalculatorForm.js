import React, { useState } from 'react';

function CalculatorForm() {
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    const age = Number(data.get("age"));
    const gender = data.get("gender");
    const height = Number(data.get("height"));
    const weight = Number(data.get("weight"));
    const activity = data.get("activity");
    const goal = data.get("goal");
    const exerciseDays = Number(data.get("exerciseDays"));

    const bmr =
      gender === "male"
        ? 10 * weight + 6.25 * height - 5 * age + 5
        : 10 * weight + 6.25 * height - 5 * age - 161;

    const activityMultiplier = {
      sedentary: 1.2,
      lightly: 1.375,
      active: 1.55,
      very: 1.725,
    };

    let tdee = bmr * activityMultiplier[activity];

    if (goal === "lose") tdee -= 500;
    else if (goal === "gain") tdee += 300;

    const proteinCal = tdee * 0.3;
    const carbsCal = tdee * 0.4;
    const fatCal = tdee * 0.3;

    const proteinGram = (proteinCal / 4).toFixed(0);
    const carbsGram = (carbsCal / 4).toFixed(0);
    const fatGram = (fatCal / 9).toFixed(0);

    const weekCalories = Array.from({ length: 7 }, (_, i) =>
      i < exerciseDays ? Math.round(tdee + 200) : Math.round(tdee)
    );

    setResult({
      tdee: Math.round(tdee),
      proteinGram,
      carbsGram,
      fatGram,
      weekCalories,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="age"
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        /><br />

        <input
          name="height"
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
        /><br />

        <input
          name="weight"
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        /><br />

        <label htmlFor="gender">Gender</label><br />
        <select name="gender" required>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select><br />

        <label htmlFor="activity">Activity</label><br />
        <select name="activity" required>
          <option value="">Select</option>
          <option value="sedentary">Sedentary (1-2 days/week)</option>
          <option value="lightly">Lightly Active (2-3 days/week)</option>
          <option value="active">Active (4-5 times/week)</option>
          <option value="very">Very Active (6 days/week)</option>
        </select><br />

        <label htmlFor="goal">Goal</label><br />
        <select name="goal" required>
          <option value="">Select</option>
          <option value="maintain">Maintain Weight</option>
          <option value="lose">Lose Weight</option>
          <option value="gain">Gain Muscle</option>
        </select><br />

        <input
          name="exerciseDays"
          type="number"
          placeholder="Exercise Days/week"
          required
        /><br />

        <button type="submit">Calculate</button>
      </form>

      {/* Result display */}
      {result && (
        <div style={{ marginTop: "20px" }}>
          <h3>Results</h3>
          <p><strong>TDEE:</strong> {result.tdee} kcal/day</p>
          <p><strong>Protein:</strong> {result.proteinGram} g</p>
          <p><strong>Carbs:</strong> {result.carbsGram} g</p>
          <p><strong>Fat:</strong> {result.fatGram} g</p>
          <p><strong>Weekly Calories:</strong></p>
          <ul>
            {result.weekCalories.map((cal, i) => (
              <li key={i}>Day {i + 1}: {cal} kcal</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CalculatorForm;
