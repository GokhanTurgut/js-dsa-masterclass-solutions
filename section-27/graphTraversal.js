class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      return "Vertex already exists!";
    } else {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    } else {
      return "Vertex does not exist!";
    }
  }

  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      this.adjacencyList[vertex].forEach((edgeVertex) => {
        this.removeEdge(vertex, edgeVertex);
      });
      delete this.adjacencyList[vertex];
    } else {
      return "Vertex does not exist!";
    }
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (vertex) => {
          if (vertex !== vertex2) return vertex;
        }
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (vertex) => {
          if (vertex !== vertex1) return vertex;
        }
      );
    } else {
      return "Vertex does not exist!";
    }
  }

  // Depth first graph traversal recursive
  depthFirstRecursive(startingVertex) {
    const result = [];
    const visited = {};
    function traverse(vertex) {
      if (!this.adjacencyList[vertex]) return;
      visited[vertex] = true;
      result.push(vertex);
      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          traverse.bind(this)(neighbor);
        }
      });
    }
    traverse.bind(this)(startingVertex);
    return result;
  }

  // Depth first graph traversal iterative
  depthFirstIterative(startingVertex) {
    const result = [];
    const visited = {};
    const stack = [startingVertex];
    while (stack.length > 0) {
      const vertex = stack.pop();
      if (!visited[vertex]) {
        visited[vertex] = true;
        result.push(vertex);
        this.adjacencyList[vertex].forEach((neighbor) => {
          if (!visited[neighbor]) {
            stack.push(neighbor);
          }
        });
      }
    }
    return result;
  }

  // Breadth first graph traversal
  breadthFirst(startingVertex) {
    const result = [];
    const visited = {};
    const queue = [startingVertex];
    while (queue.length > 0) {
      const vertex = queue.shift();
      if (!visited[vertex]) {
        visited[vertex] = true;
        result.push(vertex);
        this.adjacencyList[vertex].forEach((neighbor) => {
          if (!visited[neighbor]) {
            queue.push(neighbor);
          }
        });
      }
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

console.log(graph.adjacencyList);
console.log(graph.breadthFirst("A"));
