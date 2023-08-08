import { useState } from "react";
const AgeCalculator = ({ calculateAge }) => {
  const [birthDate, setbirthDate] = useState("");

  const handleChangeDate = (e) => {
    setbirthDate(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    calculateAge(birthDate);
  };
  return (
    <form
      className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
      onSubmit={handleSubmit}
    >
      <input
        value={birthDate}
        type="date"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 "
        onChange={handleChangeDate}
      />
      <button
        disabled={!birthDate}
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none disabled:cursor-not-allowed"
      >
        Caculate Age
      </button>
    </form>
  );
};

export default AgeCalculator;
