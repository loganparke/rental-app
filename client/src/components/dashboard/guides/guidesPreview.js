import React from "react";
import { useStoreContext } from '../../../utils/GlobalState';


// Guide preview does a map over the guides a user has and returns a component to the main dashboard for users to interact with, including buttons that take users to other pages where they can look at their guide in more detail

function GuidesPreview() {
  const [state, dispatch] = useStoreContext();



  return (
    <>
    {state.user && state.user.guides.length ? (
    <div>
      {state.user.guides.map((guide) => (
        <div className="p-5" key={guide._id}>
        <div className="preview flex flex-wrap w-11/12 m-auto bg-white rounded shadow-md">
          <div className="w-2/6">
            <img src={guide.photo} className="rounded-l h-full"></img>
          </div>
          <div className="w-4/6 flex flex-wrap">
          <a id="title" className="p-3 w-full">{guide.name}</a>
            <div className="w-4/6"> 
              <p id="city" className="p-3">{guide.address}</p>
              <p id="views" className="p-3">1,345 views</p>
              <p id="invite/share" className="p-3">✉ Share Guide</p>
            </div>
            <div className="w-2/6 flex flex-wrap">
              <a href={"/user/" + state?.user?._id + "/guide/" + guide._id} target="blank" id={guide._id} className="my-1 p-3 bg-cyan-400 text-white rounded-full">See Guide</a>
              <a href={"/dashboard/guide/edit/" + guide._id} id="edit" className="my-1 p-3 bg-cyan-400 text-white rounded-full">Edit Guide</a>
              <a href="/guideId/insights" id="insights" className="my-1 p-3 bg-cyan-400 text-white rounded-full">Guide insights</a>
            </div>
          </div>
        </div>
      </div>
      ))} 
    </div>
    ):(<div>You Don't Have Any Guides!</div>)}
    </>
  );
};

export default GuidesPreview;