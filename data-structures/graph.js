class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(name) {
    if (!this.adjacencyList[name]) {
      this.adjacencyList[name] = [];
    }
  }

  addEdge(v1, v2) {
    if (this.adjacencyList[v1]) {
      this.adjacencyList[v1].push(v2);
    }

    if (this.adjacencyList[v2]) {
      this.adjacencyList[v2].push(v1);
    }
  }

  removeEdge(v1, v2) {
    if (this.adjacencyList[v1]) {
      this.adjacencyList[v1] = this.adjacencyList[v1].filter((el) => el !== v2);
    }

    if (this.adjacencyList[v2]) {
      this.adjacencyList[v2] = this.adjacencyList[v2].filter((el) => el !== v1);
    }
  }

  removeVertex(v) {
    while (this.adjacencyList[v].length) {
      const adjacentVertex = this.adjacencyList[v].pop();
      this.removeEdge(v, adjacentVertex);
    }

    delete this.adjacencyList[v];
  }

  DFSR(start) {
    const result = [];
    const visited = {};

    (function dfs(v) {
      if (!v) {
        return;
      }

      visited[v] = true;
      result.push(v);

      this.adjacencyList[v].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs.call(this, neighbor);
        }
      });
    }.call(this, start));

    return result;
  }

  DFSI(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let vertex;

    visited[start] = true;

    while (stack.length) {
      vertex = stack.pop();
      result.push(vertex);

      this.adjacencyList[vertex].forEach((neighnor) => {
        if (!visited[neighnor]) {
          visited[neighnor] = true;
          stack.push(neighnor);
        }
      });
    }

    return result;
  }

  BFS(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let vertex;

    visited[start] = true;

    while (queue.length) {
      vertex = queue.shift();
      result.push(vertex);

      this.adjacencyList[vertex].forEach((neighnor) => {
        if (!visited[neighnor]) {
          visited[neighnor] = true;
          queue.push(neighnor);
        }
      });
    }

    return result;
  }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

// graph.removeEdge("Tokyo", "Dallas");
// graph.removeVertex("Dhaka");
// console.log(graph.DFSR("A"));
// console.log(graph.DFSI("A"));
console.log(graph.BFS("A"));

// console.log(graph);
