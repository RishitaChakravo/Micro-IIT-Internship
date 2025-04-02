
async function fetchData(targetCurrency) {
    try{
        let response = await fetch('/api')
        let data = await response.json()
        return data[targetCurrency];
    } catch(error){
        console.log(`Couldn't fetch data:`, error)
    }
}

export {fetchData}