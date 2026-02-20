const formatLocaleDate = (date?: Date) => {
  if(!date)
    return 'present';

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export default formatLocaleDate;