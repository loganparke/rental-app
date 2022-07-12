import React, { useState, useEffect } from "react";

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

    const showEditCategory = (e) => {
      console.log(e);

    };

    const [categoryFormState, setCategoryFormState] = useState({categoryName: '', categoryContent: ''});
    

    useEffect(() => {
      
    }, []);

    const renderModal = (category) => {
      if(categoryFormState.categoryName !== category.name){
        console.log('hi');
        console.log(categoryFormState)
        // setCategoryFormState({
        //   categoryName: category.name,
        //   categoryContent: category.description
        // });
      }

      const handleFormChange = (event) => {
        const { name, value } = event.target;
        setCategoryFormState({
          ...categoryFormState,
          [name]: value,
        });
        console.log(categoryFormState)
      };
      return(
        <div data-id={category._id} className="absolute w-screen h-screen m-auto top-0 left-0 z-10 text-white">
          <div className="bg-gray-600 opacity-30 w-full h-full z-20"></div>
          <div className="absolute top-12 z-30 w-full">
            <div className="w-1/2 m-auto bg-green-400 rounded-md" >
              <div className="flex justify-between p-3">
                <p></p>
                <h2 className="pl-12 py-2">modal</h2>
                <button className="p-2 mx-3 rounded font-bold">X</button>
              </div>
              <div className="">
                <h2 className="p-1 m-1 w-1/3">Section Title: </h2>
                <input className="text-black p-1 m-2 w-5/6 h-20" type='text' value={category.name} onChange={handleFormChange} name="categoryName" id="categoty-name"/>
              </div>
              <div className="">
                <h2 className="p-1 m-1 w-1/3">Section Content: </h2>
                <input className="text-black p-1 m-2 w-5/6 h-20" type='text' value={category.description} onChange={handleFormChange} name="categoryContent" id="categoty-name"/>
              </div>
            </div>
          </div>
        </div>
      )
    }

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
        <button>Add Section ➕</button>
        {guideData.categories.map((category) => {
          return(
          <div  key={category._id} className='bg-cyan-700 text-white m-2 rounded flex flex-wrap'>
            <div className="flex justify-around w-full">
              <div className="font-medium">{category.name}</div>
              <button onClick={() => showEditCategory(category)}>EDIT 📝</button> 
            </div>
            <div className="bg-white m-2 p-1 px-2 rounded text-black w-full">{category.description}</div>
            {/* <div>{renderModal(category)}</div> */}
          </div>
          )
        })}

      
      </div>
    </div>
  );
};

export default EditGuide;