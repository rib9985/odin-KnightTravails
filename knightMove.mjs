export function knightMoves(initialPos, finalPos) {
  const possibleMoves = [
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

  function bfs(start, goal) {
    const queue = [[start]];
    const visited = new Set();

    visited.add(start.toString());
    while (queue.length > 0) {
      const path = queue.shift();
      const currentPos = path[path.length - 1];

      if (currentPos.toString() === goal.toString()) {
        return path;
      }
      for (const move of possibleMoves) {
        const nextPos = [currentPos[0] + move[0], currentPos[1] + move[1]];
        if (
          nextPos[0] > -1 &&
          nextPos[0] < 8 &&
          nextPos[1] > -1 &&
          nextPos[1] < 8 &&
          !visited.has(nextPos.toString())
        ) {
          visited.add(nextPos.toString());
          queue.push([...path, nextPos]);
        }
      }
    }
    return null;
  }

  const result = bfs(initialPos, finalPos);
  console.log(
    `Knight goes from ${initialPos} -> ${finalPos} in ${result.length} moves, which are:`,
  );
  console.log(result);
  return result;
}
