export const calculateAvgRating = (nums)=>{
    const sum = nums.reduce((prev,next)=> prev + next, 0);
    return sum / nums.length;   
}


export const calculateDuration = (date)=>{
    const currentDate = new Date();
    const createdAtDate = new Date(date);
    const differenceTime = Math.abs(currentDate - createdAtDate);
    const differenceDays = Math.ceil(differenceTime / (1000 * 60 * 60 * 24));
    const differenceWeek = Math.floor(differenceDays / 7 );
    const differenceMonth = Math.floor(differenceDays /30 );

    if(differenceMonth > 0){
        return `${differenceMonth} month(s)`;
    } else if (differenceWeek > 0){
        return `${differenceWeek} week(s)`;
    }
    else{
        return `${differenceDays} day(s)`;
    }
}