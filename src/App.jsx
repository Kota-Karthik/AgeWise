import AgeCalculator from "./Pages/AgeCalculator";
import AgeResult from "./Pages/AgeResult";
import { useState } from "react";
import differenceInYears from 'date-fns/differenceInYears';
import differenceInMonths from 'date-fns/differenceInMonths';
import differenceInDays from 'date-fns/differenceInDays';
import differenceInHours from 'date-fns/differenceInHours';
import differenceInMinutes from 'date-fns/differenceInMinutes'
import differenceInSeconds from 'date-fns/differenceInSeconds'

function App() {
  const [age,setAge]=useState(null);
  const calculateAge=(birthDate)=>{
   const today=new Date();
   const birthDateObj=new Date(birthDate);
   const ageYears=differenceInYears(today,birthDateObj);
   const ageMonths=differenceInMonths(today,birthDateObj);
   const ageDays=differenceInDays(today,birthDateObj);
   const ageHours=differenceInHours(today,birthDateObj);
   const ageMinutes=differenceInMinutes(today,birthDateObj);
   const ageSeconds=differenceInSeconds(today,birthDateObj);
  setAge({
    years:ageYears,
    months:ageMonths,
    days:ageDays,
    hours:ageHours,
    minutes:ageMinutes,
    seconds:ageSeconds,
  })
  };
  return (
    


    <section className="bg-white ">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">AgeWise</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 "> Unveil the Story of Time! Delve into the captivating world of age calculation with our innovative project. Seamlessly estimating ages with precision.</p>
        <AgeCalculator calculateAge={calculateAge} />
     {age && <AgeResult age={age}/>}
        
    </div>
</section>


  );
}

export default App;
