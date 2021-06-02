import {elements} from "./View.js"

const State = {
    complete:0,
    remaining:0
};

export const updateProgress= type=>{
    
    if(type==='add'){
        State.remaining++;
        
        return{
        remainValue:State.remaining,
        completeValue:State.complete
        }
    }else if(type==='done'){
        State.remaining--;
        State.complete++;
        
        return{
        remainValue:State.remaining,
        completeValue:State.complete
        }
    }else if(type==='notdone'){
        State.remaining++;
        State.complete--;
        
        return{
        remainValue:State.remaining,
        completeValue:State.complete
        }
    }else if(type==='del'){
        State.remaining--
        
        return{
        remainValue:State.remaining,
        completeValue:State.complete
        }
    }    
}
