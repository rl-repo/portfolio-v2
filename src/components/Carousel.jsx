import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import { Image, Flex, Text } from "@chakra-ui/react";

export default function SimpleSlider() {
  var settings = {
    // customPaging: function (i) {
    //   return (
    //     <a>
    //       <img src={`src/assets/img/dashboards/r_dash/graph${i + 1}.png`} />
    //     </a>
    //   );
    // },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    touchMove: true,
    swipeToSlide: true,
  };
  return (
    <Slider {...settings}>
      <div>
        <Flex
          justifyContent="space-around"
          alignItems="center"
          flexDirection="column"
        >
          <Image
            src="src/assets/img/dashboards/Balance_v_Default.png"
            alt="Balance vs Default graph"
            borderRadius="1%"
            height="10%"
          />
          <p>
            Graph 1: Logistic regression plot of the probability of an account
            defaulting.
          </p>
        </Flex>
      </div>

      <div>
        <Flex
          justifyContent="space-around"
          alignItems="center"
          flexDirection="column"
        >
          <Image
            src="src/assets/img/dashboards/donner.png"
            alt="Donner Party Survival"
            borderRadius="1%"
            height="10%"
          />
          <p>Graph 2: A graph predicting Donner Party survivors.</p>
        </Flex>
      </div>
      <div>
        <Flex
          justifyContent="space-around"
          alignItems="center"
          flexDirection="column"
        >
          {" "}
          <Image
            src="src/assets/img/dashboards/iris_GGpair.png"
            alt="Iris GGPairs Graph"
            borderRadius="1%"
            height="10%"
          />
          <p>Graph 3: Generalized pairs plot of Iris data.</p>
        </Flex>
      </div>
      <div>
        <Flex
          justifyContent="space-around"
          alignItems="center"
          flexDirection="column"
        >
          <Image
            src="src/assets/img/dashboards/DR_Classification.png"
            alt="Classification Graph"
            borderRadius="1%"
            height="10%"
          />
          <Text align="center">
            Graph 4: Decision tree to predict the prescence of diabetic
            retinopathy signs or not (refer to source for meaning behind
            variable numbers).
          </Text>
        </Flex>
      </div>
      <div>
        <Flex
          justifyContent="space-around"
          alignItems="center"
          flexDirection="column"
        >
          <Image
            src="src/assets/img/dashboards/Poverty_County.png"
            alt="Florida Poverty"
            borderRadius="1%"
            height="10%"
          />
          <Text align="center">
            Graph 5: US census poverty percentage estimates by county for 2014
            for the South Atlantic Region. (usmaps package)
          </Text>
        </Flex>
      </div>
    </Slider>
  );
}

// https://react-slick.neostack.com/docs/get-started

// function CarouselTemp() {
//   return (
//     <Carousel showArrows={true} showThumbs={true} dynamicHeight={true}>
//       <div>
//         <img src="src/assets/img/dashboards/Balance_v_Default.png" />
//         <p>test</p>
//       </div>
//       <div>
//         <img src="src/assets/img/dashboards/Balance_v_Default.png" />
//         <p>test2</p>
//       </div>
//     </Carousel>
//   );
// }

// export default CarouselTemp;

// <Carousel
//   showArrows={true}
//   onChange={onChange}
//   onClickItem={onClickItem}
//   onClickThumb={onClickThumb}
// >
//   <div>
//     <img src="src/assets/img/dashboards/Balance_v_Default.png" />
//     <p className="legend">Legend 1</p>
//   </div>
//   <div>
//     <img src="src/assets/img/dashboards/Balance_v_Default.png" />
//     <p className="legend">Legend 2</p>
//   </div>
// </Carousel>
// );
