const isWeekend = ([workDay, weekend]: [number, number], day: number) => { 
  const temp = day % (workDay + weekend);

  return temp > workDay || temp === 0;
};

export const findFreeSlots = (workArr: Array<[number, number]>, period: number) => {
  const result = [];

  for (let i = 1; i <= period; i++) {

    if (workArr.every((item)=> isWeekend(item, i))) {
      result.push(i)
    }
  } 

  return result;
} 