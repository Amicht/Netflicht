export const splitMoviesTo4th = (array, windowWidth) => {
    let groupNumber = 4;
    if(windowWidth<570) groupNumber = 2;
    else if(windowWidth< 990) groupNumber = 3;
    else if(windowWidth < 1400) groupNumber = 4;
    else  groupNumber = 5;
    let index = 0;
    const splittedArry = [[]];
    array.forEach((m,i) => {
      if(i%groupNumber=== 0 && i!==0){
        splittedArry.push([m]);
        index++;
      }
      else{ splittedArry[index].push(m); }
    });
    return splittedArry;
}
  