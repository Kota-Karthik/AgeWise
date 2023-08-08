const AgeResult = ({age}) => {
    return (  
        <div>
            <h3 class="text-3xl font-bold ">Your Age:</h3>
            <h4 class="text-2xl font-bold ">In Years:</h4>{age.years}
            <h4 class="text-2xl font-bold ">In Months:</h4>{age.months}
            <h4 class="text-2xl font-bold ">In Days:</h4>{age.days}
            <h4 class="text-2xl font-bold ">In Hours:</h4>{age.hours}
            <h4 class="text-2xl font-bold ">In Minutes:</h4>{age.minutes}
            <h4 class="text-2xl font-bold ">In Seconds:</h4>{age.seconds}
        </div>
    );
}
 
export default AgeResult;