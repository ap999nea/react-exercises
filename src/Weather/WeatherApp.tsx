import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getCurrentWeather, getGeoCode } from "./api";
import { CurrentWeather } from "./components/CurrentWeather";
import { DailyForecast } from "./components/DailyForecast";
import { HourlyForecast } from "./components/HourlyForecast";
import { Spinner } from "./components/Spinner";
import { useLoader } from "./hooks/useLoader";
import type { Coords, WeatherResponse } from "./models/weather.model";

const locations = [
  {
    value: "london",
    label: "London",
    id: 1,
  },
  {
    value: "tokyo",
    label: "Tokyo",
    id: 2,
  },
  {
    value: "rome",
    label: "Rome",
    id: 3,
  },
  {
    value: "bangkok",
    label: "Bangkok",
    id: 4,
  },
  {
    value: "melbourne",
    label: "Melbourne",
    id: 5,
  },
  {
    value: "sydney",
    label: "Sydney",
    id: 6,
  },
  {
    value: "paris",
    label: "Paris",
    id: 7,
  },
  {
    value: "new york",
    label: "New York",
    id: 8,
  },
];

export const WeatherApp = () => {
  const [location, setLocation] = useState<string>("");
  const [coords, setCoords] = useState<Coords | null>(null);
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const { loading, setIsLoading } = useLoader();

  const handleSubmitForm = async () => {
    setIsLoading(true);
    const response = await getGeoCode(location);
    setCoords({ lat: response[0].lat, lon: response[0].lon });
    setIsLoading(false);
  };

  useEffect(() => {
    const fetchWeather = async () => {
      if (!coords) return;
      setIsLoading(true);

      try {
        const data = await getCurrentWeather(coords);
        setWeather(data);
      } catch (error) {
        console.error("Could not retrieve current weather data", error);
      }

      setIsLoading(false);
    };

    fetchWeather();
  }, [coords, setIsLoading]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col gap-6 w-5/6 md:w-4/6">
          <h1 className="text-3xl font-bold">Weather App</h1>
          <div className="flex flex-col gap-6">
            <Card>
              <form className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-0">
                <div className="flex gap-4 items-center content-between justify-between">
                  <Select
                    value={location}
                    onValueChange={(value) => setLocation(value)}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="City" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {locations.map((location) => (
                          <SelectItem key={location.id} value={location.value}>
                            {location.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  type="button"
                  disabled={!location}
                  onClick={handleSubmitForm}
                >
                  Search location
                </Button>
              </form>
            </Card>
            {weather && (
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <CurrentWeather className="w-1/2" weather={weather} />
                  <DailyForecast className="w-1/2" weather={weather} />
                </div>
                <HourlyForecast weather={weather} />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
