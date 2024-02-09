import '../calculator/calculator_styles.css'

const Converters = () => {

  const converters = [
    { icons: "sample", converter_name: "Currency"},
    { icons: "sample", converter_name: "Data"},
    { icons: "sample", converter_name: "Length"},
    { icons: "sample", converter_name: "Mass"},
    { icons: "sample", converter_name: "Speed"},
    { icons: "sample", converter_name: "Temperature"},
    { icons: "sample", converter_name: "Time"},
    { icons: "sample", converter_name: "Volume"}
  ]

  return (
    <section id="converters">
        <div className="calculator_wrap">
            <div className="calculator_container">
                <h1>Converters</h1>
                <div className="calc_items_wrap">
                  {converters.map((converter, index) => (
                      <div key={index} className="calc_item_container">
                          <div className="calc_item_image"></div>
                          <div className="calc_item_name">
                            <span>{converter.converter_name}</span>
                            <span>Converter</span>
                          </div>
                      </div>
                  ))}
                </div>
            </div>
        </div>
    </section>
  );
};

export default Converters;
