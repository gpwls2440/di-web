import dayjs from 'dayjs';

export const theFirstDayOfTheMonth = dayjs()
  .set('year', dayjs().year())
  .set('month', dayjs().month())
  .set('date', 1)
  .set('hour', 9)
  .set('minute', 0)
  .set('second', 0)
  .set('millisecond', 0);

export const threeYearsAgoOfThisMonth = theFirstDayOfTheMonth
  .subtract(3, 'year')
  .valueOf();

export const twoYearsAgoOfThisMonth = theFirstDayOfTheMonth
  .subtract(2, 'year')
  .valueOf();

export const oneYearAgoOfThisMonth = theFirstDayOfTheMonth
  .subtract(1, 'year')
  .valueOf();
