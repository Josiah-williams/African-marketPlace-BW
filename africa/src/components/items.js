import React, { useState, useEffect} from "react";
import { connect } from "react-redux";
import  * as actionCreators  from "./state/actionCreators";
import { useHistory } from "react-router-dom";


export function Item(props) {
  const history = useHistory();
    useEffect(() => {
      props.getitems()
    }, []);
    
    const Logout = e => {
      localStorage.removeItem("token");
      history.push("/login");
    };
      
    return (
      <div>
        <h1>items List</h1>
        {props.items.map(item => (
          <div>

              <p>id: {item.id}</p>
                <p>name: {item.name}</p>
                <p> description: {item.description}</p>
                  <p>price: {item.price}</p>
				           <p>location: {item.location}</p>
				            <p>category: {item.category}</p>
              </div>
        ))}

        
        <button onClick={Logout}>Log out</button>
        </div>
    )
}

    
   export default connect(
    function mapStateToProps(state) {
      return {
        items: state.items.items
      };
    },
    actionCreators
  )(Item);
  
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