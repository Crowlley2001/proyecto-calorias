import CalorieDisplay from "./CalorieDisplay"
import { useActivity } from "../hooks/activity-reducer"



export default function CalorieTracker() {

  const { caloriesConsumed, caloriesBurned, netCalories } = useActivity()

  return (
    <>
        <h2 className="text-4xl font-black text-white text-center">Resumen de Calorias</h2>
        <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
             <CalorieDisplay
             Calories = {caloriesConsumed}
             text="Consumidas"
             />
             <CalorieDisplay
             Calories = {caloriesBurned}
             text="Ejercicio"
             />
             <CalorieDisplay
             Calories = {netCalories}
             text="Diferencia"
             />
        </div>
       
    </>
  
  )
}
