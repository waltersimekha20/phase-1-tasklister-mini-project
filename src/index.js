

document.addEventListener("DOMContentLoaded", () => {
  const formito=document.querySelector("form");
  formito.addEventListener('submit',(e)=>{
    e.preventDefault();
    buildMyTaskito(e.target.task.value);
    formito.reset();
  })
  })
  function buildMyTaskito(task){
    const btn=document.createElement('button');
    btn.textContent=' X'
    btn.addEventListener('click',deleting)
    const p=document.createElement("p");
    p.textContent= `${task} `;
    p.appendChild(btn)
    console.log(p)
    document.querySelector("#list").appendChild(p);
  }
  function deleting(e){
    e.target.parentNode.remove();
  };
  document.addEventListener('DOMContentLoaded',()=>{
    const formato=document.querySelector("#dates");
    formato.addEventListener('submit', (e)=>{
      e.preventDefault();
      buildDate(e.target.dating.value);
      formato.reset();
   })
  })
  function buildDate(dateInfo){
    const btn=document.createElement('button');
    btn.textContent="done";
    btn.addEventListener('click',deleto)
    const p=document.createElement('p');
    p.textContent=dateInfo
    p.appendChild(btn)
    console.log(p)
    document.querySelector("#listing").appendChild(p);
  }
  function deleto(e){
    e.target.parentNode.remove();
  };
  
  