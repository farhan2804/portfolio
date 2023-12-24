import Image1 from "../../assets/Images/Projects/text.svg";
import Image2 from "../../assets/Images/Projects/quiz.svg";
import Image3 from "../../assets/Images/Projects/todo.svg";
import Image4 from "../../assets/Images/Projects/automation.svg";
import Image5 from "../../assets/Images/Projects/qr.png";
import Image6 from "../../assets/Images/Projects/infinity.png";
import Image7 from "../../assets/Images/Projects/darkMode.svg";
import Image8 from "../../assets/Images/Projects/calculator.svg";

import {
  TEXTTRACT,
  LIGHT_DARK_MODE,
  CALCULATOR,
  HOME_AUTOMATION,
  QR_CODE_GENERATOR,
  INFINITY_SCROLL,
  Quiz_App,
  Todo_List,
} from "../constants/urlConstants.js";

export const projectData = [
  {
    id: "project_1",
    image: Image1,
    title: "Text Utility App",
    description: "Text Utility App using React JS",
    url: TEXTTRACT,
  },
  {
    id: "project_2",
    image: Image2,
    title: "Quiz App",
    description: "Quiz App using React JS",
    url: Quiz_App,
  },
  {
    id: "project_3",
    image: Image3,
    title: "Todo List",
    description: "Todo List using React and JavaScript",
    url: Todo_List,
  },
  {
    id: "project_4",
    image: Image4,
    title: "Smart Home Automation-IOT",
    description: "Designed Using Node Mcu and Bylnk App",
    url: HOME_AUTOMATION,
  },
  {
    id: "project_5",
    image: Image5,
    title: "QR Code Generator",
    description: "QR Code generator using React Js",
    url: QR_CODE_GENERATOR,
  },
  {
    id: "project_6",
    image: Image6,
    title: "Infinity scroll",
    description: "Infinity scroll using HTML, CSS and JavaScript",
    url: INFINITY_SCROLL,
  },

  {
    id: "project_7",
    image: Image7,
    title: "Light & Dark Mode",
    description: "Light dark Mode using HTML, CSS and JavaScript",
    url: LIGHT_DARK_MODE,
  },
  {
    id: "project_8",
    image: Image8,
    title: "Calculator",
    description: "Calculator using HTML, CSS and JavaScript",
    url: CALCULATOR,
  },
];
