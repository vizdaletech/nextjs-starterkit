export const dateFormater = (date) => {
    const newDate = new Date(date)
    const formateDate =  new Intl.DateTimeFormat('en-US', {
      dateStyle: 'short',
      timeStyle: 'short',
      timeZone: 'Asia/Kolkata',
    }).format(newDate)
    return formateDate
  }