import { Card } from "@/components/ui/card";
import type { WeatherResponse } from "../models/weather.model";
import { WeatherIcon } from "./WeatherIcon";

type Props = {
  weather: WeatherResponse;
};

export const HourlyForecast = ({ weather }: Props) => {
  return (
    <Card>
      <h2 className="text-2xl font-bold">Hourly Forecast (48h)</h2>
      <div className="flex gap-6 overflow-x-scroll">
        {weather.hourly.map((hour, key) => (
          <div
            key={`${weather.lat}-${weather.lon}-${key}`}
            className="flex flex-col gap-2 items-center p-2"
          >
            <p>
              {new Date(hour.dt * 1000).toLocaleTimeString(undefined, {
                hour: "numeric",
                minute: "2-digit",
              })}
            </p>
            <WeatherIcon src={hour.weather[0].icon} />
            <p>{Math.round(hour.temp)}ºC</p>
          </div>
        ))}
      </div>
    </Card>
  );
};
