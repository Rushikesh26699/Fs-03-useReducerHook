import { useReducer } from "react";

function UseReducer() {

    function reducerFn(state,action){
        
        if(action.type === "increase"){
            state = {
                ...state,
                count:state.count + action.payload
            }
        }else if(action.type === "decrease"){
            state={
                ...state,
                count:state.count - action.payload
            }
        }else{
            state ={
                count: action.payload
            }
        }

        return state
    }

    const [state,dispatch] = useReducer(reducerFn,{count :0}) 

  return <>
    <div>
           <h2>Counter : {state.count}</h2>
           <button onClick={()=>{dispatch({
            type:"increase",
            payload:5
           })}}>Increase</button>&nbsp;
           <button onClick={()=>{dispatch({
            type:"decrease",
            payload:5
           })}}>Decrease</button>&nbsp;
           <button
           onClick={()=>{dispatch({
            type:"reset",
            payload:0
           })}}>Reset</button>&nbsp;

    </div>
  </>;
}

export default UseReducer;
