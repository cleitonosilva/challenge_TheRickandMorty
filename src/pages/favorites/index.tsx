/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import api from "@service/service";
import { Card } from "@components/Card";
import { Header } from "@components/Header";
import { Search } from "@components/Search";
import Image from "next/image";
import { Character } from "@src/models/character";

const Favorites: NextPage = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const formatter = new Intl.DateTimeFormat("pt-BR");

  const formatDate = (date: string) => {
    if (date) {
      const newDate = new Date(date);
      return formatter.format(newDate);
    }
    return formatter.format(new Date());
  };

  const onHandleFavorite = () => {
    const favoritedsavedJson = sessionStorage.getItem("favorited");
    let favorited = JSON.parse(favoritedsavedJson || "[]");
    setCharacters(() => favorited);
  };

  useEffect(() => {
    onHandleFavorite();
  }, []);
  return (
    <>
      <div className="flex flex-col bg-[#000000]">
        <Header title="Meus Favoritos"></Header>

        <div className="grid grid-cols-16 justify-center bg-[#000000] h-full w-full	 mt-80	">
          {characters.map((character: Character) => {
            return (
              <div
                key={character.id}
                className="flex justify-center bg-[#000000] mb-16"
              >
                <div className=" mx-2 my-2 overflow-hidden	rounded-md bg-backgroundHeader ">
                  <div className="text-center mt-2  flex-col ">
                    <div className="flex w-full ">
                      <div className="w-full">
                        <img src={character.image} alt="" />
                      </div>
                    </div>
                    <h1 className=" font-bold text-orange-300 text-3xl m-6">
                      {character.name}
                    </h1>
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
                      <span className="text-2xl text-gray-50">Episódios:</span>
                      <p className=" font-bold text-orange-300 text-3xl mb-4 ">
                        {" "}
                        {character.episode.length}
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
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Favorites;
