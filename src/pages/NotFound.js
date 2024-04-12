import { useNavigate } from "react-router-dom";
import CustomButton from "../components/custom/custom_button";
import ScrollToTop from "../components/scrolltotop";

const NotFound = () => {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate('/');
  }

  return (
    <>
      <ScrollToTop />
      <section className="notfound_section">
        <div className="notfound_container">
          <h1>404</h1>
          <h2>OPPS! PAGE NOT FOUND</h2>
          <p>Looks like you've wandered off the beaten path. The page you're looking for
            seems to have taken a detour into the digital abyss.
          </p>
          <p>
            Don't fret! Just tap the button below to get back on track.
          </p>
          <div className="notfound_btn_wrap">
            <CustomButton
              btn_name={"Return to Homepage"}
              click={handleReturnHome}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default NotFound;