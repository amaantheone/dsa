const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

const hasPath = (graph, src, dst) => {
  if (src === dst) return true;

  for ( let neighbour of graph[src] ) {
    if ( hasPath(graph, neighbour, dst) === true ) {
      return true;
    }
  }
  
  return false;
}

const res = hasPath(graph, 'f', 'k'); // true
console.log(res);