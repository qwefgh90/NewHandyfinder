// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
import "./styles/main.css"
import "./ui/frame"
import { AppFrame } from "./ui/frame";

const appName = "HandyFinder"

function header() {

}

document.body.appendChild(new AppFrame());
