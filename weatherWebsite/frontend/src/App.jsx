import { CityProvider } from "./cityName.jsx"
import WeatherApp from "./weatherApp.jsx"
import Widget from "./Widget.jsx"

function App(){
    return (
    <>
        <CityProvider>
            <Widget/>
            <WeatherApp/>
        </CityProvider>
        
    </>
)
}

export default App
