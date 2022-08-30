const tooltipTextHandler = (type, isActive) => {
    if(isActive && type !== "הפעל"){
      if(type === 'הוספה לרשימה') return "הסרה מהרשימה"
      else if(type === "מידע נוסף") return "פחות מידע"
    }
    else return type;
}

const limitInfo = (text, isLimited) => {
    if(!text) return;
    if(isLimited){ return text.substring(0, 40) + "..."; }
    else{ return text; }
}
  
const getMovieLengthTitle = type => type === "movie"? " דקות": " עונות"
const checkIfNew = year => +year > 2021? <span className='text-success fw-bolder'>חדש</span>: null;

export {
    tooltipTextHandler,
    limitInfo,
    getMovieLengthTitle,
    checkIfNew
}