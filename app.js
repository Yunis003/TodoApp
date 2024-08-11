let input=document.querySelector('.input')
let lists=document.querySelector('.list-container')
let countt=document.querySelector('.count')
let theme=document.querySelector('.changetheme')

theme.addEventListener('click', function(){
    document.querySelector('body').classList.toggle('light-theme')
    document.querySelector('.changetheme').classList.toggle('change')
    document.querySelector('.backgroundimage').classList.toggle('backgroundimage2')
})

let count = 0;
function addTask(){
    if(input.value=== ''){
                input.style.borderColor='crimson'
            }
  //esas
  else{
    input.style.borderColor='black'
        let li=document.createElement('li');
        li.innerHTML=input.value;
        lists.append(li)
        let span=document.createElement('span')
        span.innerHTML='&#x2717'
        li.append(span);
        localStorage.setItem('tasks', li.textContent)

        count++;
        countt.innerHTML = count;
        
  }
}
// localStorage.setItem('li', li)

lists.addEventListener('click', function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('checked');
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove() ;
        count--;
    countt.innerHTML = count;
    }
},false)














// function addTask(){
//     if(input.value=== ''){
//         alert('Mueyyen Task Elave Edin')
//     }
//     else{
//         let li=document.createElement('li');
//         li.innerHTML=input.value;
//         lists.append(li)
//         let span=document.createElement('span')
//         span.innerHTML='&#x2717'
//         li.append(span)
//     }
//     var count = 0;
//     count++;
//     countt.innerHTML = count;
// }
