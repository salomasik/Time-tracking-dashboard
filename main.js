const workEl = document.querySelector("#work"); 
const dataEl = document.querySelector(".date"); 
const url = './data.json';




dataEl.addEventListener("click",(e)=>{
    const targetElText = e.target.textContent.toLowerCase();

    fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    
    console.log(data)
    data.forEach(day => {
        const dayEl = document.querySelector(`#${day.title.toLowerCase()}`);
        for (const key in day.timeframes) {
            if (key === targetElText) {
                const element = day.timeframes[key];
                dayEl.querySelector('p').textContent =`Previous - ${element.previous} hrs`;
                dayEl.querySelector('h2').textContent =`${element.current} hrs`;
            }
        }
        
        
    });
  });

  
})


