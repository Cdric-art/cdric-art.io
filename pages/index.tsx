import { SideBar } from "../components/SideBar";
import { styled } from "../styles/stitches.config";
import { Home } from "../components/Home";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";

const App = () => {
  return (
    <App_Container>
      <SideBar />
      <Right_Container>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Right_Container>
    </App_Container>
  );
};

export default App;
const App_Container = styled("section", {
  position: "relative",
  backgroundColor: "$dark75",
  overflow: "hidden",

  "&::before": {
    position: "absolute",
    content: "<html>",
    fontFamily: "La Belle Aurore",
    fontSize: "1.1rem",
    fontStyle: "italic",
    color: "$gray100",
    top: 5,
    left: 5,
    "@desktop": {
      fontSize: "1.3rem",
      left: 180,
    },
  },
  "&::after": {
    position: "absolute",
    content: "</html>",
    fontFamily: "La Belle Aurore",
    fontSize: "1.1rem",
    color: "$gray100",
    bottom: 5,
    left: 5,
    "@desktop": {
      fontSize: "1.3rem",
      left: 180,
    },
  },
});

const Right_Container = styled("section", {
  position: "relative",
  "@desktop": {
    marginLeft: 150,
  },

  "&::before": {
    position: "absolute",
    content: "<body>",
    fontFamily: "La Belle Aurore",
    fontSize: "1.1rem",
    fontStyle: "italic",
    color: "$gray100",
    top: 25,
    left: 15,
    "@desktop": {
      fontSize: "1.3rem",
      left: 50,
    },
  },
  "&::after": {
    position: "absolute",
    content: "</body>",
    fontFamily: "La Belle Aurore",
    fontSize: "1.1rem",
    color: "$gray100",
    bottom: 30,
    left: 15,
    "@desktop": {
      fontSize: "1.3rem",
      left: 50,
    },
  },
});
