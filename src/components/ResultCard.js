import React from 'react';

function ResultCard({ result }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px', marginTop: '20px' }}>
      <h3>Nutrition Breakdown</h3>
      <p><strong>TDEE:</strong> {result.tdee} kcal/day</p>
      <p><strong>Protein:</strong> {result.proteinGram} g</p>
      <p><strong>Carbs:</strong> {result.carbsGram} g</p>
      <p><strong>Fat:</strong> {result.fatGram} g</p>
    </div>
  );
}

export default ResultCard;
