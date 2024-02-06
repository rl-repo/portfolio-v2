import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import { Image, Flex, Text, Link, Box } from "@chakra-ui/react";

import { carouselImg } from "../../public/data/carouselImg.jsx";

export default function SimpleSlider() {
  var settings = {
    // customPaging: function (i) {
    //   return (
    //     <a>
    //       <img src={`src/assets/img/dashboards/r_dash/graph${i + 1}.png`} />
    //     </a>
    //   );
    // },
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    touchMove: true,
    swipeToSlide: true,
  };
  return (
    // <Heading fontSize={{ base: "25px", md: "50px", lg: "60px" }}>

    // <Box width="50vw">
    <Box width={{ base: "30vw", lg: "50vw" }}>
      <Slider {...settings}>
        {carouselImg.map((img, i) => (
          <div key={i}>
            <Flex
              justifyContent="space-around"
              alignItems="center"
              flexDirection="column"
            >
              <Image
                src={img.src}
                alt={img.alt}
                borderRadius="1%"
                // width="30vw"
                width={{ base: "30vw", md: "35vw", lg: "40vw" }}
              />
              <Text>{img.text}</Text>
            </Flex>
          </div>
        ))}
        <div>
          {/* <Flex
          justifyContent="space-around"
          alignItems="center"
          flexDirection="column"
        > */}
          <Flex alignItems="center" flexDirection="column">
            <Image
              src="public/img/r_dash/graph5.png"
              alt="Classification Graph"
              borderRadius="1%"
              // height="5%"
              width="35vw"
              // width={{ base: "10vw", lg: "35vw" }}
            />
            <Text>
              Graph 5: Decision tree to predict diabetic retinopathy signs
              presence - refer to{" "}
              {
                <Link
                  color="tealLink"
                  href="https://archive.ics.uci.edu/dataset/329/diabetic+retinopathy+debrecen+data+set"
                >
                  source
                </Link>
              }{" "}
              for variable definition.
            </Text>
          </Flex>

          {/* </Flex> */}
        </div>
      </Slider>
    </Box>
  );
}

// export default function SimpleSlider() {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     // touchMove: true,
//     // swipeToSlide: true,
//   };
//   return (
//     <Box width="200px">
//       <Slider {...settings}>
//         <div className="card">
//           <p>Slide 1</p>
//         </div>{" "}
//         <div className="card">
//           <p>Slide 2</p>
//         </div>
//         {/* <div>
//         <Text>Slide 2</Text>
//       </div> */}
//       </Slider>
//     </Box>
//   );
// }

// https://react-slick.neostack.com/docs/get-started
