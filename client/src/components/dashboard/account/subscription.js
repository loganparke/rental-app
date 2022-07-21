import React, { useEffect } from "react";
import { useStoreContext } from '../../../utils/GlobalState';
import { formatDate } from '../../../utils/dateFormat';
import { useMutation } from '@apollo/client';
import { DELETE_SUBSCRIPTION } from '../../../utils/mutations';
import { DELETE_SUB } from '../../../utils/actions';

function Subscription() {
  const [state, dispatch] = useStoreContext();

  const [deleteSubscription] = useMutation(DELETE_SUBSCRIPTION);

  const handleDeleteSubscription = async (event) => {
    try {
      const subsriptionId = event.target.id;
      console.log(subsriptionId);

      const updatedUser = await deleteSubscription({
        variables: { subscriptionId: subsriptionId }
      });
      dispatch({
        type: DELETE_SUB,
        id: subsriptionId,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return(
    <div className="bg-gray-100 m-auto py-5">
    <div className="bg-white m-auto rounded-xl w-5/6 mt-5">
      
      {state.user.subscription.length > 0 ? (<>
      <div className="flex justify-between border-b-2 font-bold">
        <h2 className="font-bold text-lg m-3">Current Subscription:</h2>
        <div>
          <button id={state?.user?.subscription[0]?._id} className="m-3 bg-gray-200 p-2 px-3 rounded-full" onClick={handleDeleteSubscription}>Cancel Subscription</button>
          <button className="m-3 text-white bg-cyan-400 p-2 px-3 rounded-full">Upgrade Subscription</button>
        </div>
        
      </div>
      <div className="flex flex-wrap m-5">
        <div className="w-full flex py-2 flex justify-around">
          <p className=""><span className="font-semibold">Properties/Guides: </span>{state?.user?.subscription[0]?.propertiesAllowed}</p>
          <p className=""><span className="font-semibold">Price Per Year: </span>{'$' + state?.user?.subscription[0]?.price}</p>
        </div>

        <p className="mb-5 px-3">Started: {formatDate(state?.user?.subscription[0]?.startDate)}</p>
        <p className="mb-5 px-3">Ends: {formatDate(state?.user?.subscription[0]?.startDate)}</p>
        <p className="mb-5 px-3">Next Payment: {formatDate(state?.user?.subscription[0]?.startDate)}</p>
      </div>
      </>
      ): (
      <div className="p-5">
        <h3 className="text-2xl font-bold mb-5">You do not have an active subscription.</h3>
        <a href="/dashboard/addSubscription" className="m-2 bg-cyan-700 p-2 rounded-full font-bold text-white">Click here to add a subscription:</a>
      </div>)}

    </div>
    <button className=" my-4 p-3 rounded-full bg-cyan-400 text-white font-bold">Open Payment Portal</button>
    </div>
  );
};

export default Subscription;