import masterDaisyUi from "https://esm.sh/jsr/@totto/mastercss-daisyui@0.0.4";
import { baseConfig } from "https://esm.sh/jsr/@totto/mastercss-daisyui@0.0.4/config/baseConfig";
import { lightConfig } from "https://esm.sh/jsr/@totto/mastercss-daisyui@0.0.4/theme/light";
import { darkConfig } from "https://esm.sh/jsr/@totto/mastercss-daisyui@0.0.4/theme/dark";

console.log(masterDaisyUi);

/** @type {import('npm:@master/css@2.0.0-rc.44').Config} */
export default {
  extends: [
    masterDaisyUi
  ],
};
