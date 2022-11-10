import {useEffect} from "react"

const useTitle=title=>{
    useEffect(()=>{
      document.title=`${title} -Raj Supreme Tourist Service`;
    }, [title]) 
}

export default useTitle;