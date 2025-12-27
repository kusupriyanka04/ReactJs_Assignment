export const initialState = {
    step: 1,
    formData: {
        name: "",
        email: "",
        userName: "",
        password: ""
    },
    isSubmitted: false
}

export const formReducer = (state, action) => {
    switch(action.type){
        case "UPDATE_FIELD":
            return{
                ...state,
                formData:{
                    ...state.formData,
                    [action.feild]: action.value
                }
            }
        case "Next_step":
            return{
                ...state,
                step: state.step + 1
            }   
        case "PREVIOUS_step":
            return{
                ...state,
                step: state.step - 1
            }  
        case "SUBMIT_FORM":   
            return{
                ...state,
                isSubmitted: true
            } 
        case "RESET_FORM":
            return initialState
        default:
            return state              
    }
}