import {
  Section,
  Container,
  ColumnLeft,
  ColumnRight,
  Button,
  Image,
} from "./HeroElements";
import { motion, useTime, useTransform } from "framer-motion";
import PlanetOne from "../assets/planet1.png";
import PlanetTwo from "../assets/planet2.png";
import PlanetThree from "../assets/planet3.png";
import PlanetFour from "../assets/planet4.png";
import Astronaut from "../assets/astronaut.png";

export const Hero = () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  const time = useTime();
  const rotate = useTransform(
    time,
    [0, 4000], // For every 4 seconds...
    [0, 10], // ...rotate 360deg
    { clamp: false }
  );

  return (
    <Section>
      <Container>
        <ColumnLeft>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            Welcome To Space
          </motion.h1>
          <motion.p
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 3 }}
          >
            Embark on a celestial voyage into the mysteries of the cosmos.
          </motion.p>
          <Button
            whileHover={{ scale: 1.05 }}
            whileTap={{
              scale: 0.95,
              backgroundColor: "transparent",
              border: "2px solid #fff",
              color: "#fff",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.5 } }}
          >
            Get Started
          </Button>
          <Image
            src={Astronaut}
            alt="astronaut"
            whileTap={{ scale: 1.5 }}
            animate={{
              y: [0, -20, 0],
              scaleY: [1, 0.95, 1],
              scaleX: [1, 1.03, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "mirror",
            }}
            drag={true}
            dragConstraints={{ left: 100, right: 250, top: 0, bottom: 50 }}
          />
        </ColumnLeft>
        <ColumnRight>
          <Image
            src={PlanetOne}
            alt="planet"
            whileTap={{ scale: 0.9 }}
            drag={true}
            dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            style={{ rotate }}
          />
          <Image
            src={PlanetTwo}
            alt="planet"
            whileTap={{ scale: 0.6 }}
            drag={true}
            dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            style={{ rotate }}
          />
          <Image
            src={PlanetThree}
            alt="planet"
            whileTap={{ scale: 0.8 }}
            drag={true}
            dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 2 } }}
            style={{ rotate }}
          />
          <Image
            src={PlanetFour}
            alt="planet"
            whileTap={{ scale: 0.9 }}
            drag={true}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            style={{ rotate }}
          />
        </ColumnRight>
      </Container>
    </Section>
  );
};
