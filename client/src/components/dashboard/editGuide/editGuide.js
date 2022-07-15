import React, { useState } from "react";
import RenderModal from "./modal";
import AddSection from "./addSection";

function EditGuide() {

  const guideData = {
      name: 'fish creek lodge',
      image: 'https://www.familyhandyman.com/wp-content/uploads/2018/02/handcrafted-log-home.jpg',
      address: '4513 Fish Creek Road, Island Park, ID 82394',
      categories: [
        {
          _id: 1,
          name: 'Wifi/Internet',
          description: 'Wifi passwork: 1234254, Wifi network: this wifi'
        },
        {
          _id: 2,
          name: 'Check in',
          description: 'Check in is after 3 PM, Door code is 4562'
        },
        {
          _id: 3,
          name: 'Check out',
          description: 'Checkout time is 10 AM, no late checkouts'
        }
      ]
    }

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

  return (
    //hardcoded for now but will call the API to display selected info with a map function of the data
    <div className="">
      <nav className="bg-cyan-800 text-white p-4 flex justify-between">
        <p className="text-3xl">🏕️</p>
        <a href="/Dashboard" className="bg-white p-3 rounded-full text-black">Back to Dashboard</a>
        <p> </p>
      </nav>
      <div className="bg-white m-5 rounded-lg shadow">
        <h1>{guideData.name}</h1>
        <p>{guideData.address}</p>
        {/* <img alt='house pic' src={guideData.image} className='w-1/4' /> */}
        <button onClick={showAddSection}>Add Section ➕</button>
        {guideData.categories.map((category) => {
          return(
          <div  key={category._id} className='bg-cyan-700 text-white m-2 rounded flex flex-wrap'>
            <div className="flex justify-around w-full">
              <div className="font-medium">{category.name}</div>
              <button onClick={() => showModal(category)}>EDIT 📝</button> 
            </div>
            <div className="bg-white m-2 p-1 px-2 rounded text-black w-full">{category.description}</div>
          </div>
          )
        })}
        
        {activeModal && (
        <div className="flex flex-wrap absolute top-0 left-0 w-full">
          <RenderModal category={currentCategory} setActiveModal={setActiveModal} /> 
          
        </div> )}
      
          {activeAddSection && (
          <div className="absolute top-0 left-0 w-full h-full">
            <AddSection setActiveAddSection={setActiveAddSection}/>
          </div> )}
      </div>
    </div>
  );
};

export default EditGuide;