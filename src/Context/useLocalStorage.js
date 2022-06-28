import { useEffect, useState } from "react";
/* 
  localStorage.removeItem("pKey")
  localStorage.clear()
*/
function useLocalStorage(pKey, pInitialValue) {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [aItem, setAItem] = useState(pInitialValue);
  
    useEffect(() => {
      setTimeout(() => {
        try {
          const aLStorage_Item = localStorage.getItem(pKey);
    
          let lstor_parsedItems;
    
          if (!aLStorage_Item) {
            localStorage.setItem(pKey, JSON.stringify(pInitialValue));
            lstor_parsedItems = pInitialValue;
          } else {
            lstor_parsedItems = JSON.parse(aLStorage_Item);
          }
    
          setAItem(lstor_parsedItems);
          setLoading(false);
        } catch (error) {
          setError(error);
        }
      }, 1000);
    });
  
  
    const mReloadItem = (pA_newItem) => {
      try {
        const aStringifiedItem = JSON.stringify(pA_newItem);
        localStorage.setItem(pKey, aStringifiedItem);
        setAItem(pA_newItem);
      } catch (error) {
        setError(error);
      }
    };
  
    // return [aItem, mReloadItem];
    return {aItem, mReloadItem, loading, error};
  }

  export {useLocalStorage};