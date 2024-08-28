export function knightMoves(initialPos, finalPos) {}

const moves = [
  //first group of moves
  [1, 2],
  [1, -2],
  [-1, 2],
  [-1, -2],
  //second group of moves
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1],
];

class PopulateMoves {
  constructor() {
    this.position = position;
    this.previousPosition = null;
    this.finalPosition = finalPosition;
  }

  possibleMoves() {
    const nextMoves = [];

    moves.forEach((element) => {
      const validMove = this.checkValidMove(element, this.position);

      if (validMove) {
        nextMoves.push(validMove);
      }
    });
  }

  checkValidMove(position, move) {
    finalPosition = [postion[0] + move[0], position[1] + move[1]];
    if (
      finalPosition[0] > -1 &&
      finalPosition[0] < 8 &&
      finalPosition[1] > -1 &&
      finalPosition[1] < 8
    ) {
      return finalPosition;
    }
  }
}

class Graph {
  constructor() {
    this.nodes = new Map();
  }

  addNode(node) {
    this.nodes.set(node, []);
  }

  addEdge(source, destination) {
    this.nodes.get(source).push(destination);
    this.nodes.get(destination).push(source);
  }
}
