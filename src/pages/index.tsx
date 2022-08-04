/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Link from "next/link";
import api from "@service/service";
import { Card } from "@components/Card";
import { Header } from "@components/Header";
import { Search } from "@components/Search";
import { Character } from "@src/models/character";

const Home: NextPage = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [characterTypes, setcharacterTypes] = useState<string>("");

  const onHandleFavorite = (item: any) => {
    const favoritedsavedJson = sessionStorage.getItem("favorited");
    let favorited = JSON.parse(favoritedsavedJson || "[]");

    let verify = favorited.find((x: any) => x.id === item.id);
    if (verify) {
      favorited = favorited.filter((x: any) => x.id !== item.id);
    } else {
      item.liked = !item.liked;
      favorited.push(item);
    }
    sessionStorage.setItem("favorited", JSON.stringify(favorited));
    characterAlreadyInFavorites(characters);
  };

  const onHandleTypeCharacter = (item: any) => {
    setcharacterTypes(() => item);
  };

  async function loadCaractherByType() {
    let url = characterTypes
      ? `/character/?type=${characterTypes}`
      : "/character";

    if (searchText !== "" && characterTypes === "") {
      if (searchText.length >= 1) {
        url = `/character/?name=${searchText}`;
      } else {
        url = "/character";
      }
    } else {
      url = `/character/?name=${searchText}&type=${characterTypes}`;
    }

    const { data } = await api.get(`${url}`);
    characterAlreadyInFavorites(data.results);
  }

  const characterAlreadyInFavorites = (data: any) => {
    const favoritedsStoraged = JSON.parse(
      sessionStorage.getItem("favorited") || "[]"
    );
    const transformedCharacters = data.map((item: Character) => ({
      ...item,
      liked: false,
    }));

    const favoritedCharacters = favoritedsStoraged.filter((item: Character) =>
      transformedCharacters.some((empId: Character) => empId.name === item.name)
    );
    let noFavoritedCharacters = transformedCharacters.filter(
      (item: Character) =>
        !favoritedCharacters.some((empId: Character) => empId.name === item.name)
    );

    const allCharacters = [...noFavoritedCharacters, ...favoritedCharacters];
    allCharacters.sort((a: Character, b: Character) => a.id - b.id);
    setCharacters(() => allCharacters);
  };

  async function loadCharacters() {
    const { data } = await api.get("/character");
    characterAlreadyInFavorites(data.results);
  }

  useEffect(() => {
    loadCharacters();
  }, []);

  useEffect(() => {
    loadCaractherByType();
  }, [characterTypes, searchText]);
  return (
    <>
      <div className="flex flex-col bg-[#000000]">
        <Header title="Challenge"></Header>
        <Search
          searchText={searchText}
          setSearchText={setSearchText}
          setCharacterType={onHandleTypeCharacter}
        />
        <div className="flex sm:justify-end justify-center	w-97">
          <Link href="/favorites">
            <div className="flex-col cursor-pointer text-center">
              <img
                src="/assets/images/favorite.svg"
                alt=""
                title="Acessar Favoritos"
                className="min-w-10 w-10 ml-3 "
              />
              <p className="text-gray-100">Favoritos</p>
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-16 justify-center mb-80 bg-[#000000] h-full w-full mt-5">
          {characters.map((character: Character) => {
            return (
              <Card
                key={character.id}
                character={character}
                onHandleFavorite={onHandleFavorite}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
