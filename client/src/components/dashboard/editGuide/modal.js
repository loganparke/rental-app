import React,{ useState, useRef } from "react";

const RenderModal = (props) => {
  let category = props.category;
  let setActiveModal = props.setActiveModal;
  console.log(props);

  const [categoryFormState, setCategoryFormState] = useState({categoryName: '', categoryContent: ''});
  
  const modal = useRef();
  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setCategoryFormState({
      ...categoryFormState,
      [name]: value,
    });
    console.log(categoryFormState);
  };

  const saveModalChanges = () => {
    console.log('saving changes: ' + {categoryFormState})
  };


  return(
    <div ref={modal} data-id={category._id} className="absolute w-screen h-screen m-auto top-0 left-0 z-10 text-white">
      <div className="bg-gray-600 opacity-30 w-full h-full z-20"></div>
      <div className="absolute top-12 z-30 w-full">
        <div className="w-1/2 m-auto bg-green-400 rounded-md" >
          <div className="flex justify-between p-3">
            <p></p>
          </div>
          <div className="">
            <button onClick={() => setActiveModal(false)} className='bg-black p-2 px-3 rounded-md text-white z-40'>X</button> 
            <h2 className="p-1 m-1 w-1/3">Section Title: </h2>
            <input className="text-black p-1 m-2 w-5/6 h-20" type='text' defaultValue={category.name} onChange={handleFormChange} name="categoryName" id="categoty-name"/>
          </div>
          <div className="">
            <h2 className="p-1 m-1 w-1/3">Section Content: </h2>
            <input className="text-black p-1 m-2 w-5/6 h-20" type='text' defaultValue={category.description} onChange={handleFormChange} name="categoryContent" id="categoty-name"/>
          </div>

          <button className='bg-stone-500 p-2 m-2 rounded' onClick={saveModalChanges}>Save Changes</button>
        </div>
      </div>
    </div>
  )
}

export default RenderModal