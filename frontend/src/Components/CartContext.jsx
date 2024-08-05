import {createContext, useContext, useReducer} from 'react'

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action)=>{
    switch (action.type) {
        case "ADD":
            return [...state,{id : action._id, file : action.file, price : action.price}]
        default:
            console.log('Err in Reducer')
    }
}

export const CartProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, []);

//    const AddtoCart = (datajan)=>{
//     dispatch({type : "Add_To_Cart", payload : {datajan}})
//    }

    return (
    <CartDispatchContext.Provider value={dispatch}>
        <CartStateContext.Provider value={state}>
            {children}
         </CartStateContext.Provider></CartDispatchContext.Provider>
    )
}

export const useCart = ()=> useContext(CartStateContext);
export const useDispatchCart = ()=> useContext(CartDispatchContext);