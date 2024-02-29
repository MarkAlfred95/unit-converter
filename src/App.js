import {
  createBrowserRouter, 
  Route, 
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'


// pages
import Home from './pages/Home';
import About from './pages/About';
import AreaCalculator from './pages/calculator/area_calculator/area_calculator';
import LengthConverter from './pages/converter/length_converter';
import MassConverter from './pages/converter/mass_converter';
import TemperatureConverter from './pages/converter/temperature_converter';
import VolumeConverter from './pages/converter/volume_converter';
import SpeedConverter from './pages/converter/speed_converter';
import TimeConverter from './pages/converter/time_converter';
import DataConverter from './pages/converter/data_converter';

// layouts
import RootLayout from './layouts/RootLayout';
import CalculatorLayout from './layouts/CalculatorLayout';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="calculator" element={<CalculatorLayout />}>
        <Route path="area-calculator" element={<AreaCalculator />} />
        <Route path="length-converter" element={<LengthConverter />} />
        <Route path="mass-converter" element={<MassConverter />} />
        <Route path="temperature-converter" element={<TemperatureConverter />} />
        <Route path="volume-converter" element={<VolumeConverter />} />
        <Route path="speed-converter" element={<SpeedConverter />} />
        <Route path="time-converter" element={<TimeConverter />} />
        <Route path="data-converter" element={<DataConverter />} />
      </Route>
    </Route>
  )
)

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
