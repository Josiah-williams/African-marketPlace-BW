import React, { useState, useEffect} from "react";
import { connect } from "react-redux";
import  * as actionCreators  from "./state/actionCreators";


export function Items({ getitems, items }) {
    useEffect(() => {
      getitems();
    }, []);
    if (!items){return null}
    return (
      <>
        <h1>items List</h1>
        {
          
           items.map(items => (
              <div key={items.id}>
                <div>{items.name}</div>
                <div>
                  <div> {items.description}</div>
                  <div>{items.price}</div>
                </div>
				<div> {items.location}</div>
				<div>{items.category}</div>
              </div>
            ))
       }
        {}
      </>
    );
  }
   export default connect(
    function mapStateToProps(state) {
      return {
        items: state.items.items
      };
    },
    actionCreators
  )(Items);
  
// function items() {
//     const [itemsList, setitemsList] = useState([]);
//     useEffect(() => {
//         axiosWithAuth()
// 		.get("https://lbs-african-marketplace.herokuapp.com/items")
// 		.then(response=>{
// 			setitemsList(
// 				response.data
// 			);
// 			   // console.log(response)
			
// 			  }) 
// 		.catch(error => {
// 			console.log(error);
// 		})

// return (
//     <>
//       <itemsList items={itemsList} updateitems={setitemsList} />
//       </>
//     );
// }
//     )
// }
// export default items