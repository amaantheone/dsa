const graph = {
    a: [ 'b', 'c' ],
    b: [],
    c: [ 'e', 'd' ],
    d: [ 'f' ],
    e: [],
    f: []
};

// const depthFirstSearch = (graph, source) => {
//     const stack = [ source ];
    
//     while ( stack.length > 0 ) {
//         const current = stack.pop();
//         console.log(current);

//         for ( let neighbour of graph[current] ) {
//             stack.push(neighbour);
//         }
//     }
// };

// recursive
const depthFirstSearch = (graph, source) => {
    console.log(source);
    for (let neighbour of graph[source]) {
        depthFirstSearch(graph, neighbour);
    }
}


depthFirstSearch(graph, 'a');