import React from "react";

function GuidesPreview() {


  return (
    //hardcoded for now but will call the API to display selected info with a map function of the data
    <div className="p-5">
      <div className="preview flex flex-wrap w-11/12 m-auto bg-white rounded shadow-md">
        <div className="w-2/6">
          <img src="https://www.roadaffair.com/wp-content/uploads/2021/09/luxury-cabin-utah-usa.jpg" className="rounded-l h-full"></img>
        </div>
        <div className="w-4/6 flex flex-wrap">
        <a id="title" className="p-3 w-full">Title</a>
          <div className="w-4/6"> 
            <p id="city" className="p-3">address</p>
            <p id="views" className="p-3">1,345 views</p>
            <p id="invite/share" className="p-3">✉ Share Guide</p>
          </div>
          <div className="w-2/6 flex flex-wrap">
            <a href="/guideId/guide" target="blank" id="preview" className="my-1 p-3 bg-cyan-400 text-white rounded-full">See Guide</a>
            <a href="/guideId/edit" id="edit" className="my-1 p-3 bg-cyan-400 text-white rounded-full">Edit Guide</a>
            <a href="/guideId/insights" id="insights" className="my-1 p-3 bg-cyan-400 text-white rounded-full">Guide insights</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidesPreview;