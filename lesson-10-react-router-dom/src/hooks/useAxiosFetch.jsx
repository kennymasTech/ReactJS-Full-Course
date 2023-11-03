
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaAsymmetrik } from 'react-icons/fa';

const useAxiosFetch = (dataUrl) => {
    const [ data, setData ] = useState([])
    const [ fetchError, setFetchError ] = useState(null)
    const [ isLoading, setIsLoading ] = useState(false)

    useEffect(() => {
        let isMounted = true
        const source = axios.CancelToken.source()

        const fetchData = async (url) => {
            setIsLoading(true);
            try {
                const response = await axios.get(url, {
                    
                })
            } catch (orror) {

            }
        }
    })

  return (
    <>
      
    </>
  )
}

export default useAxiosFetch
