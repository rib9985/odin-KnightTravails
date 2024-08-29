import { knightMoves } from "./knightMove.mjs";

knightMoves([0, 0], [3, 3]); //expect [0,0] [1,2] [3,3] ;
knightMoves([3, 3], [0, 0]);
knightMoves([0, 0], [7, 7]);
