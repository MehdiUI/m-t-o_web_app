import { Button } from "../components/ui/button"
import { RefreshCw } from "lucide-react"
import  {useGeolocation} from "../hooks/Use-geolocation"

export function WeatherDashboard() {
  const {
    coordinates,
    error: locationError,
    isLoading: locationLoading,
    getLocation,
  } = useGeolocation();

    const handlerefresh=() =>{
        getLocation()
        if(coordinates) {
            //fetch weather data based on coordinates
        }
    }

    if (locationLoading) {
        
    }

  return (
      <div className="space-y-4">
   
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">My Location</h1>
        <Button
          variant="outline"
          size="icon"
     
        >
          <RefreshCw className="h-4 w-4" />
        </Button>
      </div>
      <div>   {/*current and hourly weather*/}</div>
    </div>
  )
}

export default WeatherDashboard