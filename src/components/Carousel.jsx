import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import { Image, Flex, Text, Link } from "@chakra-ui/react";

import { carouselImg } from "../../content/data/carouselImg";

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
      {carouselImg.map((img) => (
        <div>
          <Flex
            justifyContent="space-around"
            alignItems="center"
            flexDirection="column"
          >
            <Image src={img.src} alt={img.alt} borderRadius="1%" height="10%" />
            <Text>{img.text}</Text>
          </Flex>
        </div>
      ))}
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
          <Text>
            Graph 5: Decision tree to predict the prescence of diabetic
            retinopathy signs or not refer to{" "}
            {
              <Link
                color="tealLink"
                href="https://archive.ics.uci.edu/dataset/329/diabetic+retinopathy+debrecen+data+set"
              >
                source
              </Link>
            }{" "}
            for meaning behind variable numbers).
          </Text>
        </Flex>
      </div>
    </Slider>
  );
}

// https://react-slick.neostack.com/docs/get-started
