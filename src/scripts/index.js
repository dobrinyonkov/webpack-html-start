import '../styles/index.scss';
import '@ui5/webcomponents/dist/Button';
import '@ui5/webcomponents/dist/DatePicker';
import '@ui5/webcomponents/dist/Assets';

import { setLanguage } from "@ui5/webcomponents-base/dist/config/Language.js";
import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme.js";

setLanguage("es");
setTheme("sap_horizon_dark");

console.log('webpack starterkit');
