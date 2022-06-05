import { CardProps } from '../components/Card';

import { Player } from "./types";

export const transformPlayerData = (data: Player[]) : CardProps[] => {
  const response = data.map(({ fullName, avatar, games }) => {
    const oponents = [];
    let winGames = 0;
    games.forEach(game => {
      oponents.push(...game.otherPlayers);
      if (game.winnerName === fullName) {
        winGames += 1;
      }
    });

    return {
      fullName,
      avatar,
      lastActivityDate: new Date(Math.max.apply(this, games.map(game => new Date(game.accurateDate ? game.accurateDate.date : game.date)))),
      uniqueOponents: new Set(oponents).size,
      rate: +(winGames / games.length).toFixed(2)
    };
  }).sort((a, b) => b.lastActivityDate.getTime() - a.lastActivityDate.getTime());

  return response;
}

/**
 * @description based in https://codepen.io/adeelibr/pen/LYNPYmb
 * @param callback {function}
 * @param wait {number}
**/
export function debounce(callback, wait) {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      callback(...args);
    }, wait);
  };
}

