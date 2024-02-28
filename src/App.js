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
