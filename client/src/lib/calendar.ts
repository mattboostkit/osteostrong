import { format, addDays, getDaysInMonth, getDay, startOfMonth } from "date-fns";

interface TimeSlot {
  time: string;
  available: boolean;
}

interface DayAvailability {
  date: string;
  formattedDate: string;
  dayOfWeek: string;
  slots: TimeSlot[];
}

// Generate hours from 9am to 5pm in 30-minute increments
export const generateTimeSlots = (): string[] => {
  const slots: string[] = [];
  for (let hour = 9; hour < 17; hour++) {
    const hourFormatted = hour < 10 ? `0${hour}` : `${hour}`;
    slots.push(`${hourFormatted}:00`);
    slots.push(`${hourFormatted}:30`);
  }
  return slots;
};

// Generate a calendar month with availability
export const generateCalendarMonth = (
  year: number,
  month: number,
  bookedSlots: { date: string; time: string }[]
): DayAvailability[] => {
  const daysInMonth = getDaysInMonth(new Date(year, month - 1));
  const firstDayOfMonth = getDay(startOfMonth(new Date(year, month - 1)));
  const calendar: DayAvailability[] = [];

  // Add days from previous month to fill the first week
  const previousMonthDays = firstDayOfMonth;
  if (previousMonthDays > 0) {
    const prevMonth = month === 1 ? 12 : month - 1;
    const prevYear = month === 1 ? year - 1 : year;
    const daysInPrevMonth = getDaysInMonth(new Date(prevYear, prevMonth - 1));
    
    for (let i = 0; i < previousMonthDays; i++) {
      const day = daysInPrevMonth - previousMonthDays + i + 1;
      const date = new Date(prevYear, prevMonth - 1, day);
      calendar.push({
        date: format(date, "yyyy-MM-dd"),
        formattedDate: format(date, "d"),
        dayOfWeek: format(date, "EEE"),
        slots: []
      });
    }
  }

  // Add days for current month
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month - 1, day);
    const dateString = format(date, "yyyy-MM-dd");
    
    // Generate time slots
    const timeSlots = generateTimeSlots().map(time => {
      // Check if slot is booked
      const isBooked = bookedSlots.some(
        slot => slot.date === dateString && slot.time === time
      );
      
      return {
        time,
        available: !isBooked
      };
    });
    
    calendar.push({
      date: dateString,
      formattedDate: format(date, "d"),
      dayOfWeek: format(date, "EEE"),
      slots: timeSlots
    });
  }

  // Fill out the rest of the last week with next month's days
  const totalDaysAdded = previousMonthDays + daysInMonth;
  const nextMonthDays = totalDaysAdded % 7 === 0 ? 0 : 7 - (totalDaysAdded % 7);
  
  if (nextMonthDays > 0) {
    const nextMonth = month === 12 ? 1 : month + 1;
    const nextYear = month === 12 ? year + 1 : year;
    
    for (let i = 1; i <= nextMonthDays; i++) {
      const date = new Date(nextYear, nextMonth - 1, i);
      calendar.push({
        date: format(date, "yyyy-MM-dd"),
        formattedDate: format(date, "d"),
        dayOfWeek: format(date, "EEE"),
        slots: []
      });
    }
  }

  return calendar;
};

// Get available times for a specific date and location
export const getAvailableTimes = async (
  date: string,
  location: string
): Promise<string[]> => {
  try {
    const response = await fetch(
      `/api/booking/availability?date=${date}&location=${location}`
    );
    
    if (!response.ok) {
      throw new Error("Failed to fetch available times");
    }
    
    const data = await response.json();
    return data.availableTimes || [];
  } catch (error) {
    console.error("Error fetching available times:", error);
    return [];
  }
};
