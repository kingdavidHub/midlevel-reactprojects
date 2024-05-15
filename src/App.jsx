import "./App.css";
import Accordian from "./components/accordian/Accordian";
import ImageSlider from "./components/imgae-slider/ImageSlider";
import LightDarkMode from "./components/light-dark-mode-switch/LightDarkMode";
import LoadMoreData from "./components/load-more-data/LoadMoreData";
import QrcodeGenerator from "./components/qr-code-generator/QrcodeGenerator";
import RandomColor from "./components/random-color/RandomColor";
import ScrollIndicator from "./components/scroll-indicator/ScrollIndicator";
import Star from "./components/star-rating/Star";
import TreeView from "./components/tree-view/TreeView";
import menus from "./components/tree-view/data";



function App() {
  return (
    <>
      {/* Accoridan component */}
      {/* <Accordian />  */}

      {/* Random Color Component */}
      {/* <RandomColor /> */}

      {/* Star Rating Component */}
      {/* <Star numberOfStars={10} /> */}

      {/* Image Slider Component */}
      {/* <ImageSlider url={`https://picsum.photos/v2/list`} limit={"10"} page={"1"} /> */}

      {/* Load more data */}
      {/* <LoadMoreData /> */}

      {/* Tree  view recursive UI || recursive navigation */}
      {/* <TreeView menus={menus} /> */}

      {/* QR CODE GENERATOR */}
      {/* <QrcodeGenerator /> */}

      {/* Light And Dark Mode Switch */}
      {/* <LightDarkMode /> */}

      {/* Scroll indicator  */}
      <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} />
    </>
  );
}

export default App;
