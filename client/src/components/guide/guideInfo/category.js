import React from "react";

const Category = (props) => {
  const category = props.props;
  const setInCategory = props.setInCategory;
  console.log(props);
  return (
    <div className="min-h-screen">
      <div className="flex justify-between w-screen h-12 py-10 mb-5 bg-teal-700 pb-16">
        <button onClick={() => {setInCategory(false)}} className='text-xl font-bold text-white ml-5 p-3 rounded'>{'<'}</button>
      <h1 className="m-2 text-xl text-white">{category?.name}</h1>
      <p className="mr-10"> </p>
      </div>
      <div className="flex justify-center w-screen">
        <p className="m-5 p-3 px-4 bg-white rounded-md">{category?.description}</p>
      </div>
      
    </div>
  )
}

export default Category;