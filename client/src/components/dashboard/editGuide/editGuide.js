import React, { useState, useEffect, useRef } from "react";
import { useStoreContext } from '../../../utils/GlobalState';
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_GUIDE } from "../../../utils/queries";
import { ADD_CATEGORY, DELETE_CATEGORY, UPDATE_GUIDE_TITLE, DELETE_GUIDE } from '../../../utils/mutations';
import { SET_GUIDE } from "../../../utils/actions";
import RenderModal from "./modal";
import AddSection from "./addSection";
import EditAddressComponent from "./editAddress";
import DeleteGuide from "./deleteGuide";



function EditGuide() {

  const [state, dispatch] = useStoreContext();


  const { guideId } = useParams();

  const { loading, data } = useQuery(QUERY_GUIDE, {
    variables: {
      guideId: guideId
    }
  });

  useEffect(() => {
    if (data) {
      dispatch({
        type: SET_GUIDE,
        guide: data.guide,
      });
    }
  }, [data, loading, dispatch]);



    //  TOGGLE ADD SECTION FUNCTIONALITY
    const [activeAddSection, setActiveAddSection] = useState(false);

    const  showAddSection = (category) => {
      console.log('hi')
      setActiveAddSection(true);
    };

    //  TOGGLE EDIT SECTION FUNCTIONALITY
    const [activeModal, setActiveModal] = useState(false);
    const [currentCategory, setCurrentCategory] = useState();

    const  showModal = (category) => {
      setCurrentCategory(category);
      console.log(currentCategory);
      setActiveModal(true);
    };

    //delete Category functionality
    const [deleteCategory] = useMutation(DELETE_CATEGORY);

    const handleDeleteCategory = async(categoryId, guideId) => {
      try {
        const deleteCategoryResponse = await deleteCategory({
          variables: {
            guideId: guideId,
            categoryId: categoryId
          }
        })
      } catch (e) {
        console.log(e);
      }
    }

    //toggle edit title & edit title funciton
    const [toggleEditTitle, setToggleEditTitle] = useState('false');
    const [updateGuideTitle] = useMutation(UPDATE_GUIDE_TITLE);
    const guideName = useRef();
    const editTitle = async () => {
      const mutationResponse = await updateGuideTitle({
        variables: {
          guideId: guideId,
          name: guideName.current.value
        }
      });
      if (mutationResponse) {
        dispatch({
          type: SET_GUIDE,
          guide: mutationResponse.data.updateGuideTitle,
        });
      }
      setToggleEditTitle('false')
    };



    


  return (
    //hardcoded for now but will call the API to display selected info with a map function of the data
    <div className="bg-gray-300 pb-10">
      <nav className="bg-cyan-800 text-white p-4 flex justify-between">
        <p className="text-3xl">🏕️</p>
        <a href="/Dashboard" className="bg-white p-3 rounded-full text-black">Back to Dashboard</a>
        <p> </p>
      </nav>
      <div className="bg-white m-5 rounded-lg shadow">
        <div className="flex flex-wrap w-5/6 m-auto p-3 border-b-2 border-gray-300">
          <div className="w-full">
            {toggleEditTitle === 'true' ? 
            <div className="flex flex-wrap w-full justify-around">
              <input ref={guideName} type='text' defaultValue={state?.guide?.name} className='shadow-md border-2 border-gray-100 px-3 rounded-md w-2/3' />
              <button onClick={() => editTitle()} className=' bg-cyan-400 text-white font-bold p-2 rounded-md w-1/4'>save changes</button>
            </div>
            :
            <div className="flex flex-wrap w-full justify-around">
              <h1 className="text-2xl font-bold mx-2 w-2/3 underline">{state?.guide?.name}</h1>
              <button onClick={() => setToggleEditTitle('true')} className=' bg-cyan-700 text-white font-bold p-2 rounded-md w-1/4'>Change Title 📝</button>
            </div>}
          </div>
        </div>

        <EditAddressComponent guideId={guideId} />
        
        {/* <img alt='house pic' src={guideData.image} className='w-1/4' /> */}
        <div className="flex">
          <p className="w-1/4"></p>
          <h3 className="w-1/2">Guide Sections</h3>
          <button onClick={showAddSection}>Add Section ➕</button>
        </div>
        
        <div className="grid grid-cols-2 mx-5 content-around m-auto">
        {state?.guide?.categories.map((category) => {
          return(
          <div  key={category._id} className='bg-cyan-700 text-white m-2 rounded flex flex-wrap py-2'>
            <div className="flex justify-between w-full">
              <p> </p>
              <div className="font-medium">{category.name}</div>
              <div className="mx-5"> 
                <button className="mx-5" onClick={() => showModal(category)}>EDIT 📝</button> 
                <button onClick={() => handleDeleteCategory(category._id, state?.guide?._id)}>Delete 🗑️</button>
              </div>
            </div>
            <div className="bg-white m-2 p-1 px-2 rounded text-black w-full">{category.description}</div>
          </div>
          )
        })}
        </div>
        {activeModal && (
        <div className="flex flex-wrap absolute top-0 left-0 w-full">
          <RenderModal guideId={guideId} category={currentCategory} setActiveModal={setActiveModal} /> 
          
        </div> )}
      
          {activeAddSection && (
          <div className="absolute top-0 left-0 w-full h-full">
            <AddSection guideId={state?.guide?._id} setActiveAddSection={setActiveAddSection}/>
          </div> )}
          
      </div>
      <DeleteGuide />
    </div>
  );
};

export default EditGuide;