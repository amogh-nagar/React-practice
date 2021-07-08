import {uisliceactions} from "./ui-slice";
import {cartsliceactions} from "./cart";
//Thunk
export const sendcartdata = (cart) => {
  return async (dispatch) => {
    dispatch(
      uisliceactions.setnotification({
        status: "pending",
        title: "Sending!",
        message: "Sending request",
      })
    );

    const sendrequest = async () => {
      const res = await fetch(
        "https://react-redux-1a070-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          //It will override
          body: JSON.stringify({
            items: cart.items,
            totalquantity: cart.totalquantity,
          }),
        }
      );
      // console.log(res)
      if (!res.ok) {
        throw new Error("Sending request failed!");
      }
    };
    try {
      await sendrequest();
      dispatch(
        uisliceactions.setnotification({
          status: "success",
          title: "Success!",
          message: "Sent request successfully",
        })
      );

      
      setTimeout(() => {
        dispatch(uisliceactions.resetnotification());
      }, 2000);


    } catch (err) {
      dispatch(
        uisliceactions.setnotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed",
        })
      );
    }
    // const data = await res.json();
  };
};

export const fetchcart = () => {
  return async (dispatch) => {
    const fetchdata = async () => {
      const res = await fetch(
        "https://react-redux-1a070-default-rtdb.firebaseio.com/cart.json"
      );
      console.log(res);
      if (!res.ok) {
        throw new Error("Could not fetch cart data!");
      }
      const data = await res.json();
      console.log(data);
      return data;
    };

    // try {
    fetchdata()
      .then((data) => {
        // console.log("Insoide then");
        dispatch(
          cartsliceactions.replacecart({
            items: data ? data.items : [],
            totalquantity: data.totalquantity,
          })
        );
      })
      .catch((err) => {
        dispatch(
          uisliceactions.setnotification({
            status: "error",
            title: "Error!",
            message: "Fetching! cart data failed",
          })
        );
      });
    // } catch (err) {
    //   // try {

    // }
    //   dispatch(
    //     cartsliceactions.replacecart({
    //       items: cartdata.items || [],
    //       totalquantity: cartdata.totalquantity,
    //     })
    //   );
    // } catch (err) {
    //   console.log("error");
    //   dispatch(
    //     uisliceactions.setnotification({
    //       status: "error",
    //       title: "Error!",
    //       message: "Fetching! cart data failed",
    //     })
    //   );
    // }
  };
};
