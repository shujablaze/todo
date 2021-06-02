export const elements={
    textarea:document.getElementById('task'),
    highpList:document.querySelector('.high__priority-items'),
    medpList:document.querySelector('.med__priority-items'),
    lowpList:document.querySelector('.low__priority-items'),
    addBttn:document.querySelector('.add__bttn'),
    priorityselector:document.getElementById('priority'),
    list:document.querySelector('.list'),
    completed:document.querySelector('.progress__done--value'),
    remaining:document.querySelector('.progress__remain--value')
}

export const getinputs = ()=>{
    
    let input = (elements.textarea.value).trim();
    
    if(input!==''){
        return{
            priority:elements.priorityselector.value,
            desc: input
        };
    }
    else{
        alert("Task field can't be empty");
        return -1;
    } 
}

export const clearinputs = ()=>{
    elements.textarea.value = ''
    elements.textarea.focus();
}

export const displayitem = (el)=>{

    const markup =  
    `<div class="list__${el.priority}-item list-item">  
        <input class="item__checkbox item__checkbox--${el.priority}" type="checkbox"/>  
        <span class="item__desc--${el.priority}">${el.desc}</span> 
        <button class="item__bttn item__bttn--${el.priority}"> 
            x    
        </button>   
    </div>`;
    if (el.priority === 'low'){
        elements.lowpList.insertAdjacentHTML('beforeend',markup);
    }
    else if(el.priority === 'med'){
        elements.medpList.insertAdjacentHTML('beforeend',markup);
    }
    else if(el.priority === 'high'){
        elements.highpList.insertAdjacentHTML('beforeend',markup);
    }
}



export const displayProgress = prog=>{
    elements.remaining.textContent = prog.remainValue;
    elements.completed.textContent = prog.completeValue;
}