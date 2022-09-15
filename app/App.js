import { SandboxGiftsController } from "./Controllers/SandboxGiftsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  sandboxGiftsController = new SandboxGiftsController()
}

window["app"] = new App();
