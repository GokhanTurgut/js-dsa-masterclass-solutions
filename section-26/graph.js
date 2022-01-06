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
}

const flights = new Graph();

flights.addVertex("Istanbul");
flights.addVertex("Vienna");
flights.addVertex("Berlin");
flights.addVertex("London");
flights.addVertex("Roma");
flights.addEdge("Istanbul", "Vienna");
flights.addEdge("Roma", "London");
flights.addEdge("Istanbul", "Berlin");
flights.addEdge("Berlin", "Roma");
flights.addEdge("Vienna", "London");
flights.addEdge("Istanbul", "London");
flights.addEdge("Berlin", "London");
console.log(flights.adjacencyList);
flights.removeVertex("London");
console.log(flights.adjacencyList);
