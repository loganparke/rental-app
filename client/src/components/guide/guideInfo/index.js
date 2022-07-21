import React, { useState } from "react";
import { useStoreContext } from '../../../utils/GlobalState';
import Category from "./category";

function GuideInfo() {
  const [state] = useStoreContext();
  //console.log(state);
  const [inCategory, setInCategory] = useState(false);
  const [activeCategory, setActiveCategory] = useState();
  
  const showCategory = (category) => {
    setActiveCategory(category);
    console.log(activeCategory);
    setInCategory(true);
    return(
      <Category />
    )
  }

  return(
    <div className="grid grid-cols-2 bg-gray-300">
      {inCategory === false && (
        <>
        {state?.guide?.categories?.map((category) => {
                return(
                  <div className="bg-white border-2 border-gray-300 w-full h-52 grid place-items-center rounded-md">
                    <button onClick={() => showCategory(category)} className='w-5/6'>
                      <img alt="hi" src="https://w7.pngwing.com/pngs/205/544/png-transparent-wifi-symbol-wi-fi-alliance-logo-internet-wifi-modem-icon-miscellaneous-text-symbol.png"/>
                      <h3>{category.name}</h3>
                    </button>
                </div>
                )
              })}
        </>
      )}
      {inCategory && (
        <Category props={activeCategory} setInCategory={setInCategory} />
      )}
    </div>
  )
}

export default GuideInfo;