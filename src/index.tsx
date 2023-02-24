import React from "react";
import ReactDOM from "react-dom/client";
import { BasicDatagrid } from "ad-datagrid";
import { CreateTable } from "./data";

const list = CreateTable(200);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <div style={{ width: "900px", margin: "20px auto" }}>
      <h1>Basic Datagrid</h1>
      <div>Component for react developers</div>
      <hr />
      <BasicDatagrid
        rowList={list}
        pCheckRowError={"Kolon sayılarında hata ile karşılaşıldı."}
        maxTextLength={100}
        pPaginationButton={10}
      />
    </div>
  </React.StrictMode>
);
