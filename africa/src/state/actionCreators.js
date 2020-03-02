import * as types from "./actionTypes";
import axios from "axios";

// Step 7: Design action creator functions
export const loadExperiences = () => dispatch => {
	axios
		.get("http://localhost:3333/list")
		.then(response => {
			dispatch({
				type: types.GET_list,
				payload: {
					list: response.data
				}
			});
		})
		.catch(() => {
			console.log("error!!!");
		});
};

// Step 7: Design action creator functions
export const updateForm = ({ name, value }) => {
	return {
		type: types.UPDATE_FORM,
		payload: {
			name,
			value
		}
	};
};