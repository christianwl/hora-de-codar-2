import { showExercise01 } from "./modules/exercise-01.js";
import { showExercise02 } from "./modules/exercise-02.js";
import { showExercise03 } from "./modules/exercise-03.js";
import { showExercise04 } from "./modules/exercise-04.js";
import { showExercise05 } from "./modules/exercise-05.js";
import { showExercise06 } from "./modules/exercise-06.js";
import { showExercise07 } from "./modules/exercise-07.js";
import { showExercise08 } from "./modules/exercise-08.js";
import { showExercise09 } from "./modules/exercise-09.js";
import { showExercise10 } from "./modules/exercise-10.js";
import { showExercise11 } from "./modules/exercise-11.js";


const btnIniciar = document.getElementById("btn-iniciar");

btnIniciar.addEventListener("click", function () {
  showExercise01();
  showExercise02();
  showExercise03();
  showExercise04();
  showExercise05();
  showExercise06();
  showExercise07();
  showExercise08();
  showExercise09();
  showExercise10();
  showExercise11();
});