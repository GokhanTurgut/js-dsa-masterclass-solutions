class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(value, priority) {
    this.queue.push({ value, priority });
    this.sort();
  }

  dequeue() {
    return this.queue.shift();
  }

  sort() {
    this.queue.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
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

  addEdge(vertex1, vertex2, weight) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push({ node: vertex2, weight });
      this.adjacencyList[vertex2].push({ node: vertex1, weight });
    } else {
      return "Vertex does not exist!";
    }
  }

  dijkstrasAlgorithm(start, end) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    while (nodes.queue.length) {
      let vertex = nodes.dequeue().value;
      if (vertex === end) {
        const path = [];
        while (previous[vertex]) {
          path.push(vertex);
          vertex = previous[vertex];
        }
        path.push(vertex);
        return path.reverse();
      }
      this.adjacencyList[vertex].forEach((neighbor) => {
        const distance = distances[vertex] + neighbor.weight;
        if (distance < distances[neighbor.node]) {
          distances[neighbor.node] = distance;
          previous[neighbor.node] = vertex;
          nodes.enqueue(neighbor.node, distance);
        }
      });
    }
  }
}

const map = new WeightedGraph();

map.addVertex("A");
map.addVertex("B");
map.addVertex("C");
map.addVertex("D");
map.addVertex("E");
map.addVertex("F");
map.addEdge("A", "B", 4);
map.addEdge("A", "C", 2);
map.addEdge("B", "E", 3);
map.addEdge("C", "D", 2);
map.addEdge("C", "F", 4);
map.addEdge("D", "E", 3);
map.addEdge("D", "F", 1);
map.addEdge("E", "F", 1);

console.log(map.dijkstrasAlgorithm("A", "E"));
