async function fetchData(){
    try{
        console.log("Fetch data called")
        let response = await fetch('/api')
        console.log("response from api:", response)

        if (!response.ok) {  
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let data = await response.json()
        console.log(`Data fetched`, data)
        return data
    } catch(error){
        console.log(`Data not received`, error)
        return null
    }
}

export {fetchData}