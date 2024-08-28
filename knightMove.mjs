export function knightMoves(initialPos, finalPos) {
  const moves = new PopulateMoves(initialPos, finalPos);
  const graph = moves.populateGraph();
  const bfsResult = graph.bfs(finalPos, initialPos);
  console.log(`The knight moves are: ${bfsResult}`);
}

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
  constructor(initialPos, finalPos) {
    this.initialPosition = initialPos;
    this.position = this.initialPosition;
    this.previousPosition = null;
    this.finalPosition = finalPos;
  }

  getNextMoves() {
    const nextMoves = [];

    moves.forEach((move) => {
      const validMove = this.checkValidMove(move, this.position);

      if (validMove) {
        nextMoves.push(validMove);
      }
    });
    return nextMoves;
  }

  checkValidMove(position, move) {
    const finalPosition = [position[0] + move[0], position[1] + move[1]];
    if (
      finalPosition[0] > -1 &&
      finalPosition[0] < 8 &&
      finalPosition[1] > -1 &&
      finalPosition[1] < 8
    ) {
      return finalPosition;
    }
  }

  positionFound(move) {
    if (move === this.finalPosition) {
      return true;
    } else {
      return false;
    }
  }

  createPath(graph, currentPosition, move) {
    graph.addNode(move);
    graph.addNode(currentPosition);
    graph.addEdge(currentPosition, move);
  }

  populateGraph() {
    const graph = new Graph();
    const queue = [this.initialPosition];

    while (queue.length > 0) {
      this.position = queue.shift();

      if (this.positionFound(this.position)) {
        return graph;
      } else {
        const nextMoves = this.getNextMoves();

        nextMoves.forEach((move) => {
          if (!graph.nodes.has(move.toString()))
            this.createPath(graph, this.position, move);
          queue.push(move);
        });
      }
    }
  }
}

class Graph {
  //uses map to structure an adjancency list
  constructor() {
    this.nodes = new Map();
  }

  addNode(node) {
    if (!this.nodes.has(node.toString())) {
      this.nodes.set(node.toString(), []);
    }
  }

  addEdge(source, destination) {
    this.nodes.get(source.toString()).push(destination);
    this.nodes.get(destination.toString()).push(source);
  }

  bfs(goal, root) {
    const goalString = goal.toString();
    const rootString = root.toString();
    const queue = [[rootString]];
    const explored = new Set();

    explored.add(rootString);

    while (queue.length > 0) {
      const path = queue.shift();
      const node = path[path.length - 1];

      if (node === goal) {
        return path.map((p) => p.split(",").map(Number));
      }
      const neighbors = this.nodes.get(node);

      for (let neighbor of neighbors) {
        const neighborString = neighbor.toString();
        if (!explored.has(neighborString)) {
          explored.add(neighborString);
          const newPath = path.concat([neighborString]);
          queue.push(newPath);
        }
      }
    }
    return null;
  }
}
