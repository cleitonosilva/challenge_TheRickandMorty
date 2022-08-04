/* eslint-disable @next/next/no-img-element */
import { Character } from "@src/models/character";
import Image from "next/image";
import Router from "next/router";

export type CardProps = {
  character: any;
  onHandleFavorite: (item: Character) => void;
};

export function Card({ character, onHandleFavorite }: CardProps): JSX.Element {
  const routerDetails = (item: any) => {
    Router.push({
      pathname: `/details/${item.id}`,
    });
    localStorage.setItem("details", JSON.stringify(item));
  };

  const savedFavorited = (item: any) => {
    onHandleFavorite(item);
  };

  return (
    <div className="contents w-5/6">
      <div className="h-300 mx-2 my-2 overflow-hidden	rounded-md bg-backgroundHeader ">
        <div className="text-center mt-2 ml-4 flex-col">
          <img
            src={character.image}
            alt=""
            className="w-250 h-250 cursor-pointer"
            title="Clique para exibir detalhes"
            onClick={() => routerDetails(character)}
          />
          <div className="flex justify-between px-4 mt-2 ">
            <p className="font-bold font-mouse h-7 text-stone-50 text-lg hover:text-orange-300 font-mono  ">
              {character.name}
            </p>
            {!character.liked && (
              <Image
                src="/assets/images/heart.svg"
                alt=""
                title="Clique para favoritar"
                className="cursor-pointer"
                width="20px"
                height="20px"
                onClick={() => savedFavorited(character)}
              />
            )}

            {character.liked && (
              <Image
                src="/assets/images/heart-red.svg"
                alt=""
                className="cursor-pointer"
                title="Clique para retirar da sua lista de favoritos"
                width="20px"
                height="20px"
                onClick={() => savedFavorited(character)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
