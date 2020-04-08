import React, { useState, useEffect } from "react";
import style from "./style.module.css";
import { SelectOption } from "types";

type Props = {
  options: SelectOption[];
  haveSearch?: boolean;
  isNeedToReset: boolean;
  setIsNeedToReset: (state: boolean) => void;
};

export const Select = (props: Props) => {
  const { options = [], isNeedToReset, setIsNeedToReset } = props;
  const [isOpenOptions, setIsOpenOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState<SelectOption>();
  const [searchOptionText, setSearchOptionText] = useState("");

  useEffect(() => {
    if (isNeedToReset) {
      setSelectedOption(undefined);
      setIsNeedToReset(false);
    }
  }, [isNeedToReset]);

  const renderSelectedOption = () => {
    if (selectedOption) {
      return (
        <>
          {selectedOption.imgUrl && (
            <img
              className={style.selectedOptionImg}
              src={selectedOption.imgUrl}
              alt="COVID FACE"
            />
          )}
          <span>{selectedOption.text}</span>
        </>
      );
    }
    return <span>Select buyer</span>;
  };

  const filterOptions = () =>
    searchOptionText.length
      ? options.filter(
          (el) =>
            el.text.toLowerCase().search(searchOptionText.toLowerCase()) !== -1
        )
      : options;

  const renderOptions = () => {
    const filteredOptions = filterOptions();

    if (!filteredOptions.length) return <p>No options</p>;

    return filteredOptions.map((el, index) => (
      <div
        className={style.option}
        onClick={() => {
          setSelectedOption(el);
          setIsOpenOptions(false);
        }}
        key={index}
      >
        {el.imgUrl && (
          <img className={style.optionImage} src={el.imgUrl} alt="YODA" />
        )}
        <span>{el.text}</span>
      </div>
    ));
  };

  return (
    <div className={style.selectWrapper}>
      <button
        className={style.dropdownButton}
        onClick={() => {
          setIsOpenOptions(!isOpenOptions);
          setSearchOptionText("");
        }}
      >
        {renderSelectedOption()}
      </button>
      {isOpenOptions && (
        <div className={style.dropdownWrapper}>
          {props.haveSearch && (
            <input
              className={style.searchInput}
              onChange={(e) => setSearchOptionText(e.target.value)}
            />
          )}
          {renderOptions()}
        </div>
      )}
    </div>
  );
};
