import { useRecurrenceStore } from '../stores/recurrenceStore';

export const RecurringDates = () => {
  const {
    startDate,
    endDate,
    maxDate,
    interval,
    recurrenceType,
    customInterval,
  } = useRecurrenceStore();

  if (!startDate) return [];
  let dates = [];
  let currentDate = new Date(startDate);
  let EndingDate = endDate == null ? maxDate : endDate;
  while (currentDate <= new Date(EndingDate)) {
    dates.push(new Date(currentDate));
    if (recurrenceType === 'daily') {
      currentDate.setDate(currentDate.getDate() + parseInt(interval));
    } else if (recurrenceType === 'weekly') {
      currentDate.setDate(currentDate.getDate() + 7 * parseInt(interval));
    } else if (recurrenceType === 'monthly') {
      currentDate.setMonth(currentDate.getMonth() + parseInt(interval));
    } else if (recurrenceType === 'yearly') {
      currentDate.setFullYear(currentDate.getFullYear() + parseInt(interval));
    } else if (recurrenceType === 'custom') {
      if (customInterval.unit === 'days') {
        currentDate.setDate(
          currentDate.getDate() + parseInt(customInterval.value)
        );
      } else if (customInterval.unit === 'weeks') {
        currentDate.setDate(
          currentDate.getDate() + 7 * parseInt(customInterval.value)
        );
      } else if (customInterval.unit === 'months') {
        currentDate.setMonth(
          currentDate.getMonth() + parseInt(customInterval.value)
        );
      } else if (customInterval.unit === 'years') {
        currentDate.setFullYear(
          currentDate.getFullYear() + parseInt(customInterval.value)
        );
      }
    }
  }
  return dates;
};
