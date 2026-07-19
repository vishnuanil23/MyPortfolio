/**
 * Calculates years of professional experience since a given start date.
 * Returns a whole number, incremented on the anniversary month.
 */
export function getYearsOfExperience(startYear: number, startMonth: number): number {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1; // 1-indexed

  let years = currentYear - startYear;
  if (currentMonth < startMonth) {
    years -= 1;
  }
  return years;
}

// Vishnu's career start: July 2015
export const CAREER_START_YEAR = 2015;
export const CAREER_START_MONTH = 7; // July

export const yearsOfExperience = getYearsOfExperience(CAREER_START_YEAR, CAREER_START_MONTH);
