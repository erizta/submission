import React, { useState } from "react";

const aspects = [
  "aspek_penilaian_1",
  "aspek_penilaian_2",
  "aspek_penilaian_3",
  "aspek_penilaian_4",
];

export default function App() {
  const [assessmentData, setAssessmentData] = useState(
    aspects.reduce((data, aspect) => ({ ...data, [aspect]: {} }), {})
  );
  const [isDataSaved, setIsDataSaved] = useState(false);

  const handleInputChange = (e, aspect) => {
    const { name, value } = e.target;
    setAssessmentData((prevData) => ({
      ...prevData,
      [aspect]: {
        ...prevData[aspect],
        [name]: parseInt(value),
      },
    }));
  };

  const handleSaveClick = () => {
    setIsDataSaved(true);
    alert("Congrats! The data is saved. Scroll down to see your data!");
    console.log(JSON.stringify(assessmentData, null, 2));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Student Assessment
      </h1>
      <div className="text-center flex justify-center border border-solid px-10 py-6">
        {aspects.map((aspect) => (
          <div key={aspect} className="mb-8">
            <h2 className="text-xl font-semibold mb-4 capitalize">
              {aspect.replace(/_/g, " ")}:
            </h2>
            {Array.from({ length: 10 }, (_, i) => i + 1).map((mahasiswa) => (
              <div
                key={mahasiswa}
                className="flex items-center mb-2 justify-between gap-10 mx-4"
              >
                <span className="mx-2">Mahasiswa {mahasiswa}:</span>
                <input
                  type="number"
                  name={`mahasiswa_${mahasiswa}`}
                  min="1"
                  max="10"
                  className="border border-gray-300 rounded px-3 py-2 text-center"
                  onChange={(e) => handleInputChange(e, aspect)}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-6 mx-auto block"
        onClick={handleSaveClick}
      >
        Save
      </button>
      {isDataSaved && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Saved Data:</h2>
          <pre>{JSON.stringify(assessmentData, null, 2)}</pre>
        </div>
      )}{" "}
    </div>
  );
}
