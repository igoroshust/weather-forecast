/* Index.js берёт начальный компонент App и подвяжет его к id=root */

import * as React from "react";
import * as ReactDOM from "react-dom"; /* для рендеринга компонента */
import 'bootstrap/dist/css/bootstrap.min.css'; /* стили для таблицы */
import App from "./components/App"; /* импорт компонента */

ReactDOM.render(<App/>, document.getElementById("root")); /* подвязываем компонент к root */