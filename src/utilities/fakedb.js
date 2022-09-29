const addToDB = (time) => {
  localStorage.setItem('time', time);
}

const getFromDb = (element) => {
  const dataString = localStorage.getItem(element);
  const dataInt = JSON.parse(dataString);
  return dataInt;
}

export {
  addToDB,
  getFromDb
}