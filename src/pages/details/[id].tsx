/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Header } from "@components/Header";

const Details: NextPage = () => {
  const [character, setCharacter] = useState<any>("");
  const formatter = new Intl.DateTimeFormat("pt-BR");

  const handleDetails = () => {
    const objDetail = JSON.parse(localStorage.getItem("details") || "[]");
    setCharacter(() => objDetail);
  };

  const formatDate = (date: string) => {
    if (date) {
      const newDate = new Date(date);
      return formatter.format(newDate);
    }
    return formatter.format(new Date());
  };

  useEffect(() => {
    handleDetails();
  }, []);
  return (
    <>
      <div className="flex flex-col bg-[#000000]">
        <Header title="Detalhes"></Header>

        <div className="flex justify-center mt-120  bg-[#000000] mb-16">
          <div className=" w-380 sm:w-2/3 lg:w-600	 bg-[#000000]">
            <div className=" mx-2 my-2 overflow-hidden	rounded-md bg-backgroundHeader ">
              <div className="text-center mt-2  flex-col ">
                <h1 className=" font-bold text-orange-300 text-6xl m-6">
                  {character.name}
                </h1>

                <div className="flex w-full ">
                  <div className="w-full flex justify-center">
                    <img src={character.image} alt="" />
                  </div>
                </div>
                <div className="flex-col text-center mb-8 p-2  ">
                  <span className="text-2xl text-gray-50">Status:</span>
                  <p className=" font-bold text-orange-300 text-3xl mb-4 ">
                    {" "}
                    {character.status}
                  </p>
                  <span className="text-2xl text-gray-50">Espécie:</span>
                  <p className=" font-bold text-orange-300 text-3xl mb-4 ">
                    {" "}
                    {character.species}
                  </p>
                  <span className="text-2xl text-gray-50">Criação:</span>
                  <p className=" font-bold text-orange-300 text-3xl mb-4 ">
                    {" "}
                    {formatDate(character.created)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
