import {ForecastItem} from "@/components/weather/ForecastItem";
import {ForecastResponse, List} from "@/types/api/ForecastResponse";

interface Props {
   forecast: ForecastResponse;
}


export function ForecastList({ forecast }: Props) {
const groupedByDay: Record<string, { maxTempItem?: List; minTempItem?: List }> = {};

forecast.list.forEach((item) => {
   const date = new Date(item.dt * 1000);
   const dayKey = date.toISOString().split("T")[0]; // yyyy-mm-dd
   const hour = date.getHours();

   if (!groupedByDay[dayKey]) {
      groupedByDay[dayKey] = {};
   }

   if (hour === 15) {
      groupedByDay[dayKey].maxTempItem = item;
   }

   if (hour === 3) {
      groupedByDay[dayKey].minTempItem = item;
   }
});


const dailyForecast = Object.values(groupedByDay).filter(
    (entry) => entry.maxTempItem && entry.minTempItem
);

if (dailyForecast.length === 0) {
   return <p>هیچ داده‌ای برای ساعت 3 و 15 یافت نشد.</p>;
}

return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
       {dailyForecast.map((entry, index) => (
           <ForecastItem
               key={index}
               maxItem={entry.maxTempItem!}
               minItem={entry.minTempItem!}
           />
       ))}
    </div>
);
}