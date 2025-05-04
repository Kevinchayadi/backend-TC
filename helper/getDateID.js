export default (Date =new Date()) =>{
    const dt = new Date(date);
  const dd = String(dt.getDate()).padStart(2, '0');
  const mm = String(dt.getMonth() + 1).padStart(2, '0');
  const yy = String(dt.getFullYear()).slice(-2);
  return `${dd}${mm}${yy}`;
}