//log sleep hours by day in this block
const getSleepHours = day => {
    switch (day) {
      case 'sunday':
        return 12;
        break;
      case 'monday':
        return 12;
        break;
      case 'tuesday':
        return 7;
        break;
      case 'wednesday':
        return 3;
        break;
      case 'thursday':
        return 5;
        break;
      case 'friday':
        return 12;
        break;
      case 'saturday':
        return 9;
        break;
      default:
        return 'Error!';
    }
  };
  
  //implicit return, no curly brackets
  const getActualSleepHours = () => getSleepHours('sunday')+ getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday')+ getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday');
  
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  };
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      return "Ideal sleep hours met.";
    } else if (actualSleepHours < idealSleepHours) {
      hoursUnder = (idealSleepHours - actualSleepHours);
      return `You slept ${hoursUnder} hours under your ideal target.  Get some rest.`;
    } else if (actualSleepHours > idealSleepHours) {
      hoursOver = (actualSleepHours - idealSleepHours);
      return `You slept ${hoursOver} hours over your ideal target.  You are lazy!`;
    }
  };
  
  console.log(calculateSleepDebt());
  