import {Weather} from "@/components/weather/Weather";
import ThemeToggle from "@/components/themeMode/ThemeToggle";


export default function Home() {
  return(
      <main  className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
          <div className={'flex flex-col justify-center items-center h-[100vh] '}>
              <ThemeToggle/>
              <Weather city={'tehran'}/>
          </div>

      </main>
  )
}
