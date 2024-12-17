import React from "react";
import "../style/MacronutrientBreakdown.css"


const MacronutrientBreakdown = ({ dri }) => {
  if (!dri) return null; // Don't display if DRI is not calculated

  const totalCalories = parseFloat(dri);

  // Macronutrient calculations
  const proteinCalories = (0.15 * totalCalories).toFixed(2);
  const fatCalories = (0.3 * totalCalories).toFixed(2);
  const carbCalories = (0.55 * totalCalories).toFixed(2);

  // Convert calories to grams
  const proteinGrams = (proteinCalories / 4).toFixed(2); // 1g protein = 4 kcal
  const fatGrams = (fatCalories / 9).toFixed(2); // 1g fat = 9 kcal
  const carbGrams = (carbCalories / 4).toFixed(2); // 1g carb = 4 kcal


  // Calculate percentage
  const proteinPercentage = ((proteinCalories / totalCalories) * 100).toFixed(1);
  const fatPercentage = ((fatCalories / totalCalories) * 100).toFixed(1);
  const carbPercentage = ((carbCalories / totalCalories) * 100).toFixed(1);

  return (
<div className="macronutrient-breakdown">
      <h3>Macronutrient Breakdown</h3>
      <p>
        <strong>Protein:</strong> {proteinCalories} kcal (~{proteinGrams} g) -{" "}
        {proteinPercentage}%
      </p>
      <p>
        <strong>Fat:</strong> {fatCalories} kcal (~{fatGrams} g) -{" "}
        {fatPercentage}%
      </p>
      <p>
        <strong>Carbohydrates:</strong> {carbCalories} kcal (~{carbGrams} g) -{" "}
        {carbPercentage}%
      </p>
    </div>
  );
};

export default MacronutrientBreakdown;
