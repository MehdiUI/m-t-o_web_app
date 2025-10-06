import { API_CONFIG } from "./config";
import type { Coordinates, ForecastData, WeatherData, GeocodingResponse } from './types';

class WeatherAPI {
   private createUrl(
    endpoint: string, 
    params: Record<string, string | number> ) 

    {
        const searchParams = new URLSearchParams ({appid: API_CONFIG.API_KEY, ...params} as Record<string, string>);
        
        return `${endpoint}?${searchParams.toString()}`;

   }
 async fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Weather API ERROR: ${response.statusText}`);
  }
  return response.json(); 
}

   
    async getCurrentWeather({ lat, lon }: Coordinates) :Promise <WeatherData>{
        const  url = this.createUrl (`${API_CONFIG.BASE_URL}/weather`, 
            {lat:lat.toString(),
             lon:lon.toString(),
            units: API_CONFIG.DEFAULT_PARAMS.unit
        });

        return this.fetchData<WeatherData>(url);

   }
    async getForecast({ lat, lon }: Coordinates) :Promise <ForecastData>{
        const  url = this.createUrl (`${API_CONFIG.BASE_URL}/forecast`, 
            {lat:lat.toString(),
             lon:lon.toString(),
            units: API_CONFIG.DEFAULT_PARAMS.unit
        });

        return this.fetchData<ForecastData>(url);

   }

   
 async reverseGeocode({ lat, lon }: Coordinates): Promise<GeocodingResponse[]> {
  const url = this.createUrl(`${API_CONFIG.GEO}/reverse`, {
    lat: lat.toString(),
    lon: lon.toString(),
    limit: "1",
  });
  
  const data = await this.fetchData<GeocodingResponse>(url);
  // Si l'API renvoie un objet unique, le mettre dans un tableau
  return Array.isArray(data) ? data : [data];
}

    async searchLocations(query: string): Promise<GeocodingResponse[]> {
    const url = this.createUrl(`${API_CONFIG.GEO}/direct`, {
      q: query,
      limit: "5",
    });
    return this.fetchData<GeocodingResponse[]>(url);
  }

}

export const weatherAPI = new WeatherAPI();
