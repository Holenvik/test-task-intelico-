import React, { useState } from "react";
import style from "./style.module.css";

import { Button } from "components/button";
import { Select } from "components/select";
import { Input } from "components/input";

import { BUTTON_TYPES } from "data/constants";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [isNeedToReset, setIsNeedToReset] = useState(false);
  return (
    <div className={style.appWrapper}>
      <p>New Page</p>
      <div className={style.selectBlockWrapper}>
        <Select
          options={[...Array(28)].map((el, index) => ({
            id: index,
            text: `Buyer ${index}`,
          }))}
          haveSearch
          isNeedToReset={isNeedToReset}
          setIsNeedToReset={setIsNeedToReset}
        />
        <Select
          options={[...Array(28)].map((el, index) => ({
            id: index,
            text: `Auto ${index}`,
            imgUrl:
              "https://sun9-34.userapi.com/c824500/v824500373/a8821/wneGh5M6WzE.jpg?ava=1",
          }))}
          isNeedToReset={isNeedToReset}
          setIsNeedToReset={setIsNeedToReset}
        />
        <Input
          placeholder={"Text field"}
          onChange={(text) => setInputValue(text)}
        />
        <Input
          placeholder={"Text field"}
          onChange={(text) => setInputValue(text)}
        />
        <Input
          placeholder={"Text field"}
          onChange={(text) => setInputValue(text)}
        />
        <Button
          onClick={() => undefined}
          btnType={BUTTON_TYPES.WHITE}
          btnText={"Filter"}
        />
        <Button
          onClick={() => {
            setIsNeedToReset(true);
          }}
          btnType={BUTTON_TYPES.GRAY}
          btnText={"Reset"}
        />
      </div>
    </div>
  );
};

export default App;
