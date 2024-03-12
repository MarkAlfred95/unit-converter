import {
  createBrowserRouter, 
  Route, 
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'


// pages
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

import AgeCalculator from './pages/calculator/age_calculator';
import AreaCalculator from './pages/calculator/area_calculator/area_calculator';
import AverageCalculator from './pages/calculator/average_calculator';
import BMICalculator from './pages/calculator/bmi_calculator';
import DataConverter from './pages/converter/data_converter';
import DiscountCalculator from './pages/calculator/discount_calculator';
import LengthConverter from './pages/converter/length_converter';
import MassConverter from './pages/converter/mass_converter';
import PercentageCalculator from './pages/calculator/percentage_calculator';
import SpeedConverter from './pages/converter/speed_converter';
import TemperatureConverter from './pages/converter/temperature_converter';
import TimeConverter from './pages/converter/time_converter';
import VolumeConverter from './pages/converter/volume_converter';

// layouts
import RootLayout from './layouts/RootLayout';
import CalculatorLayout from './layouts/CalculatorLayout';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="calculator" element={<CalculatorLayout />}>
        <Route path="age-calculator" element={<AgeCalculator />} />
        <Route path="area-calculator" element={<AreaCalculator />} />
        <Route path="average-calculator" element={<AverageCalculator />} />
        <Route path="bmi-calculator" element={<BMICalculator />} />
        <Route path="data-converter" element={<DataConverter />} />
        <Route path="discount-calculator" element={<DiscountCalculator />} />
        <Route path="length-converter" element={<LengthConverter />} />
        <Route path="mass-converter" element={<MassConverter />} />
        <Route path="percentage-calculator" element={<PercentageCalculator />} />
        <Route path="speed-converter" element={<SpeedConverter />} />
        <Route path="temperature-converter" element={<TemperatureConverter />} />
        <Route path="time-converter" element={<TimeConverter />} />
        <Route path="volume-converter" element={<VolumeConverter />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
