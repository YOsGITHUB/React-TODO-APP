import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了のTODO</p>
        <ul>
          <div>
            <li>TODO1です</li>
            <button>追加</button>
            <button>削除</button>
          </div>
          <div>
            <li>TODO2です</li>
            <button>追加</button>
            <button>削除</button>
          </div>
        </ul>
        <p>完了のTODO</p>
        <ul>
          <div>
            <li>TODO３です</li>
            <button>戻す</button>
          </div>
          <div>
            <li>TODO４です</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
      <div></div>
    </>
  );
};
