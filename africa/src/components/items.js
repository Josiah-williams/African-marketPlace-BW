import React, { useState,} from "react";
import axios from 'axios'
import axiosWithAuth from './auth/axiosWithAuth';


const items = () => {
    const [itemsList, setitemsList] = useState([]);

	axiosWithAuth()
		.get("https://lbs-african-marketplace.herokuapp.com/items")
		.then(response=>{
			setitemsList(
				response.data
			);
			   // console.log(response)
			
			  }) 
		.catch(error => {
			console.log(error);
		})

return (
    <>
      <itemsList items={itemsList} updateitems={setitemsList} />
      </>
  );
}
export default items