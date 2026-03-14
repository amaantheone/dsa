const graph = {
    a: ['b', 'c'],
    b: [],
    c: ['e', 'd'],
    d: ['f'],
    e: [],
    f: []
}

const breadthFirstSearch = (graph, source) => {
    const queue = [ source ];
    
    while ( queue.length > 0 ) {
        const current = queue.shift();
        console.log(current);

        for ( let neighbour of graph[current]) {
            queue.push(neighbour);
        }
    }
}

breadthFirstSearch(graph, 'a');