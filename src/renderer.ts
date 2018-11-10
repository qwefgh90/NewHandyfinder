// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
import "./styles/main.css"
import "./ui/frame"
import { RendererController } from "./controller/rendererController";
import { ProdAssembler } from "./assembler"

function entryPoint(){
    new ProdAssembler().assemble()
    const controller = new RendererController();
    document.body.appendChild(controller.getRoot());
}

entryPoint()