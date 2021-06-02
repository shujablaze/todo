import * as View from './View.js'
import {updateProgress} from './Model.js'



const addItem = ()=>{
    
    let input = View.getinputs();
    View.clearinputs();
    
    if(input!==-1){
        let progress = updateProgress('add');
        View.displayProgress(progress);
        View.displayitem(input);
    }
}

const updateUi = (event)=>{
    
    const item = event.target.closest('.list-item');
    
    if(event.target.matches('.item__checkbox')){
        item.classList.toggle('checked__item');
        
        if(event.target.checked){
            var progress = updateProgress('done');
        }else{
            var progress = updateProgress('notdone');
        }
        
        View.displayProgress(progress);
    }  
    else if(event.target.matches('.item__bttn')){
        var progress = updateProgress('del');
        item.parentNode.removeChild(item);
        
        View.displayProgress(progress);
    }
     
}


View.elements.addBttn.addEventListener('click',addItem);

View.elements.list.addEventListener('click',updateUi);

document.addEventListener('keypress',(event)=>{
    if (event.key === 'Enter' || event.keyCode === 13){
        addItem();
    }

})