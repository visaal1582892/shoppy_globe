import { useEffect,useState } from "react"

// This is a custom Hook used to fetch data from an API. It takes a URL as an argument and returns the data, loading state, and error state.
const useFetch = (url) => {

    const [result, setResult] = useState({status: "Loading", data: null});

    // Used useEffect to fetch data from the API when the component mounts or when the URL changes.
    useEffect(() => {
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((finalData) => {
                setResult({status: "Success", data: finalData});
            })
            .catch((error) => {
                setResult({status: "Error", data: "Error: Unable to Fetch Data"});
            })
    }, [url]);

    return result;
}

export default useFetch;