import * as types from"./actionTypes";


const initialLoginFormState = {
  username: "",
  password: "",
  isSubmitting: false
};

export function loginFormReducer(state = initialLoginFormState, action) {
  switch (action.type) {
    case types.INPUT_CHANGE:
      return {
        ...state,
        [action.payload[0]]: action.payload[1]
      };
    case types.LOGIN_START:
      return {
        ...state,
        isSubmitting: true
      };
    case types.LOGIN_END:
      return {
        ...state,
        isSubmitting: false
      };
    default:
      return state;
  }
}

const initialRegisterFormState = {
  username: "",
  password: "",
  department: "owner",
  isSubmitting: false
};
export function signupFormReducer(state = initialRegisterFormState, action) {
  switch (action.type) {
    case types.INPUT_CHANGE:
      return {
        ...state,
        [action.payload[0]]: action.payload[1]
      };
    case types.DEPARTMENT_CHECK_SUCCESS:
      return {
        ...state,
        department: action.payload
      };
    case types.REGISTER_START:
      return {
        ...state,
        isSubmitting: true
      };
    case types.REGISTER_END:
      return {
        ...state,
        isSubmitting: false
      };
    default:
      return state;
  }
}

const sellerFormState = {
  item_name: "",
  description: "",
  price: "",
  location: "",
};
export function addFormReducer(state = sellerFormState, action) {
  switch (action.type) {
    case types.INPUT_CHANGE:
      return {
        ...state,
        [action.payload[0]]: action.payload[1]
      };
    case types.ADD_ITEM:
      return sellerFormState;
    default:
      return state;
  }
}

const itemState = {
  items:[]
}
export function itemReducer(state = itemState, action) {
  switch (action.type) {
    case types.GET_ITEMS:
      return {
        ...state,
        isFetching:true,
        error: ''
      };
    case types.GET_ITEMS_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        items: action.payload,
        isFetching:false,
        error: ''
      };
    case types.GET_ITEMS_FAIL:
      return {
        ...state,
        isFetching:false,
        error:action.payload
      };
    case types.POST_ITEMS:
      return {
        ...state,
        items: action.payload,
        isFetching:true,
        error: ''
      };
    case types.POST_ITEMS_SUCCESS:
      return {
        ...state,
        isFetching:false,
        items: action.payload,
        error: ''
      };
    case types.POST_ITEMS_FAILURE:
      return {
        ...state,
        isFetching:false,
        error:action.payload
      };
      case types.DELETE_ITEM:
        return {
          ...state,
          item: action.payload,
          isFetching:true,
          error:''
        };
        case types.DELETE_ITEM_SUCCESS:
          return {
            isFetching:false,
            items: action.payload,
            error: ''
          }
    default:
      return state;
    }
  }

  const initialValues = {
    name: "",
    description: "",
    price: "",
    location: "",
    category:"",
  };

  export const additemReducer = (state = initialValues, action) => {
    switch (action.type) {
      case types.INPUT_CHANGE:
        return {
          ...state,
          [action.payload.inputName]: action.payload.inputValue
        };
      case types.POST_ITEMS_SUCCESS:
        return initialValues;
        //new: editing
        case types.EDIT_ITEM_START :
          return {
            ...state,
            [action.payload.inputName]: action.payload.inputValue
          };
          case types.EDIT_ITEM_SUCCESS :
            return initialValues
  
      default:
        return state;
      }
    };