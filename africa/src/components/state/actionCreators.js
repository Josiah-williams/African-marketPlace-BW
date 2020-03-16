import * as types from "./actionTypes";
import {axiosWithAuth} from "../auth/axiosWithAuth";
import axios from "axios"

export const changeHandler = e => dispatch => {
	dispatch({
	  type: types.INPUT_CHANGE,
	  payload: [e.target.name, e.target.value]
	});
  };
  
//creates an action object with type and payload
//login
export const login = (credentials, history) => dispatch => {
	dispatch({ type: types.LOGIN_START });
	   axiosWithAuth()
	   .post(
		   "/auth/login", 
		   credentials)
	  .then(res =>{
		dispatch({ type: types.LOGIN });
		// localStorage.setItem("type", res.data.user.department);
		localStorage.setItem("token", res.data.token);
		// localStorage.setItem("user", res.data.user.id);
		history.push(`/items`);
	  })
	  .catch(err => {
		console.log(err);
	  })
	  .finally(() => {
		dispatch({ type: types.LOGIN_END });
	  });
  };

//   export const departmentCheck = bool => dispatch => {
// 	const type = bool ? "buyer" : "seller";
// 	dispatch({ type: types.DEPARTMENT_CHECK, payload: type });
//   };
  
  //logoout
export const logout = history => dispatch => {
	localStorage.removeItem("token");
	localStorage.removeItem("user");
	localStorage.removeItem("type")
	dispatch({ type:types.LOG_OUT})
	history.push("/login");
  };
// Step 7: Design action creator functions
export const getItems = () => dispatch => {
	dispatch({ type:types.GET_ITEMS });
	axiosWithAuth()
		.get("/items")
		.then(res => {
			console.log(res.data);
			dispatch({ type: types.GET_ITEMS_SUCCESS, payload: res.data })
		  }
		  )
		  .catch(err => dispatch({ type: types.GET_ITEMS_FAIL, payload: err.response }));
		}
export const postItems = additems => dispatch => {
 
    dispatch({ type: types.POST_ITEMS })
    axiosWithAuth()
    .post("/item/additems", additems)
    .then(response => {
      console.log(response.data);
      
      dispatch({
        type: types.POST_ITEMS_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => {
      console.log(error.response)
      dispatch({
        type: types.POST_ITEMS_FAILURE,
        payload: error.response.data.Error
      });
    });
  };
  
	
	
export const deleteItem = id =>  dispatch => {
	dispatch({ type: types.DELETE_ITEM})
	 axiosWithAuth()
	.delete(`/items/${id}`)
	.then(res => {
		dispatch({ type: types.DELETE_ITEM_SUCCESS, payload: id });
	})
	.catch(err => {
		console.log(err);
	  });
	};
  

  export const getOneItem = id => dispatch => {
	console.log(id);
  
	const response = axiosWithAuth().get(`/items/${id}`)
	const get = response.data;
	dispatch({type:types.GET_ITEMS, id});
};


export const editItem = (id, editItem) => dispatch => {
	axiosWithAuth().put(`/items/${id}`,editItem)
	.then(response => {
	   console.log(response.data);
	  
   
	dispatch({type:types.EDIT_ITEM_SUCCESS, payload: editItem});
	})
	
	  .catch(error => {
	   console.log(error);
   })
}

// export const checkToken = history => dispatch => {
// 	  const response = await axios().get("/api/auth");
// 	  const { account_details } = response.data;
// 	  const user = response.data;
// 	  delete user.account_details;
// 	  dispatch(action(types.TOKEN_CHECK_SUCCESS, { user, account_details }));
// 	  history.push(`/${user.user_type}/dashboard`);
// 	 .catch (error) {
// 	  console.debug(error);
// 	  localStorage.removeItem("token");
// 	  dispatch(action(types.TOKEN_CHECK_FAILURE));
// 	}
