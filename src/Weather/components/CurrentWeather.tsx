import { Card } from "@/components/ui/card";
import type { WeatherResponse } from "../models/weather.model";
import { WeatherIcon } from "./WeatherIcon";

type Props = {
  weather: WeatherResponse;
  className?: string;
};

export const CurrentWeather = ({ weather, className }: Props) => {
  return (
    <Card className={`${className} flex flex-col justify-between`}>
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-2xl font-bold">Current Weather</h2>
        <p className="font-semibold text-4xl">
          {Math.round(weather.current.temp)}ºC
        </p>
        <WeatherIcon src={weather.current.weather[0].icon} />
        <p className="capitalize text-3xl">
          {weather.current.weather[0].description}
        </p>
        <p className="text-2xl">Local time:</p>
        <p className="font-semibold text-4xl">
          {new Intl.DateTimeFormat("it-IT", {
            hour: "numeric",
            minute: "numeric",
            hour12: false,
            timeZone: weather.timezone,
          }).format(new Date(weather.current.dt * 1000))}
        </p>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex flex-col gap-2 items-center">
          <p className="text-gray-500">Feels Like:</p>
          <p>{Math.round(weather.current.feels_like)}ºC</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <p className="text-gray-500">Humidity:</p>
          <p>{weather.current.humidity}%</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <p className="text-gray-500">Wind:</p>
          <p>{weather.current.wind_speed} mph</p>
        </div>
      </div>
    </Card>
  );
};
