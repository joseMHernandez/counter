let count = 0

const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')


btns.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
          const styles =  e.target.classList
          if(styles.contains('button__container-decrease')){
             count--;
          }else if(styles.contains('button__container-increase')){
              count++
          }else{
              count = 0;
          }



          if(count > 0){
              value.style.color = 'green'
          }else if(count < 0){
              value.style.color = 'red'
          }else{
              value.style.color = 'black'
              
          }

          value.textContent = count       

    })
 
})