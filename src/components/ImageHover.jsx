import { Link, Image } from "@chakra-ui/react";

function ImageHover(props) {
  return (
    <Link href={props.link}>
      <Image
        width={props.width}
        src={props.src}
        alt={props.alt}
        borderRadius="1%"
        transition="transform 0.2s"
        _hover={{
          cursor: "pointer",
          transform: "scale(1.02)",
          transitionTimingFunction: "ease-in-out",
          boxShadow: "0 0 10px #a8d4f7",
          borderColor: "#a8d4f7",
        }}
      />
    </Link>
  );
}

export default ImageHover;

/* 
Old Hover
    _hover={{
          cursor: "pointer",
          // transform: "translateY(-1px)",
          transform: "scale(1.02)",
          // translateY: "-1px",
          // transitionDuration: "2s",
          transitionTimingFunction: "ease-in-out",
          boxShadow: "0 0 10px #a8d4f7",
          borderColor: "#a8d4f7",
        }}
        */
