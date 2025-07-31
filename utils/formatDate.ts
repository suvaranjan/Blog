export const formatDate = (date: string, locale = 'en-US') => {
  const d = new Date(date)

  const day = d.getDate()
  const daySuffix = getDaySuffix(day)

  const weekday = d.toLocaleDateString(locale, { weekday: 'long' }) // "Monday"
  const month = d.toLocaleDateString(locale, { month: 'long' }) // "July"
  const year = d.getFullYear() // 2025

  return `${weekday}, ${month} ${day}${daySuffix} ${year}`
}

const getDaySuffix = (day: number) => {
  if (day >= 11 && day <= 13) return 'th'
  switch (day % 10) {
    case 1:
      return 'st'
    case 2:
      return 'nd'
    case 3:
      return 'rd'
    default:
      return 'th'
  }
}
