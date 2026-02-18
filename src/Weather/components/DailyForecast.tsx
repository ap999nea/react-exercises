import { Card } from "@/components/ui/card";
import type { WeatherResponse } from "../models/weather.model";
import { WeatherIcon } from "./WeatherIcon";

type Props = {
  weather: WeatherResponse;
  className?: string;
};

export const DailyForecast = ({ weather, className }: Props) => {
  return (
    <Card className={`${className} flex flex-col gap-6`}>
      <h2 className="text-2xl font-bold">Daily Forecast</h2>
      {weather.daily.map((day) => (
        <div className="flex justify-between" key={day.dt}>
          <p className="size-9">
            {new Date(day.dt * 1000).toLocaleDateString(undefined, {
              weekday: "short",
            })}
          </p>
          <WeatherIcon src={day.weather[0].icon} />
          <p>{Math.round(day.temp.day)}ºC</p>
          <p className="text-gray-500/75">{Math.round(day.temp.min)}ºC</p>
          <p className="text-gray-500/75">{Math.round(day.temp.max)}ºC</p>
        </div>
      ))}
    </Card>
  );
};
