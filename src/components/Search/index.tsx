/* eslint-disable @next/next/no-img-element */
import { ChangeEvent } from "react";
import Image from "next/image";

type SearchProps = {
  searchText: string;
  setCharacterType: React.Dispatch<React.SetStateAction<string>>;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
};

export function Search({
  searchText,
  setSearchText,
  setCharacterType,
}: SearchProps): JSX.Element {
  const filterByHuman = (type: string) => {
    setCharacterType(type);
  };

  async function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setSearchText(value);
  }

  return (
    <div className="flex flex-col lg:flex-row justify-center 	items-center  w-100s mt-120 sm:mt-90  mb-5  bg-[#000000] ">
      <div className="flex flex-col items-center justify-center w-100s">
        <div className="flex items-center flex-col sm:flex-row h-300 sm:h-full justify-between">
          <h6 className="text-gray-100 ">Filtros por :</h6>

          <div
            onClick={() => filterByHuman("")}
            className="flex flex-col mx-8 items-center cursor-pointer "
          >
            <Image
              src="/assets/images/solar-system.svg"
              alt="Galaxia"
              title="Sem filtros"
              width="50px"
              height="50px"
            />

            <span className="text-gray-100	"> Toda Galáxia</span>
          </div>

          <div
            onClick={() => filterByHuman("human")}
            className="flex flex-col mx-8 items-center cursor-pointer "
          >
            <Image
              src="/assets/images/human.svg"
              alt="Humanos"
              title="Exibir somente humanos"
              width="50px"
              height="50px"
            />

            <span className="text-gray-100	"> Humanos</span>
          </div>

          <div
            onClick={() => filterByHuman("alien")}
            className="flex flex-col items-center mx-8 cursor-pointer"
          >
            <Image
              src="/assets/images/alien.svg"
              alt="Aliens"
              title="Exibir somente aliens"
              width="50px"
              height="50px"
            />

            <span className="text-gray-100	"> Aliens</span>
          </div>
        </div>
      </div>

      <input
        type="text"
        placeholder="Pesquise seu personagem..."
        onChange={handleChange}
        value={searchText}
        className="w-288 sm:w-2/5	h-10 p-2 mt-8 lg:mt-0 bg-[#fcfbfa] rounded-md"
      />
    </div>
  );
}
