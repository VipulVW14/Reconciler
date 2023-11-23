// Our initial vDOM is an empty array
let vDOM: { id: number; title: string; description: string }[] = []; 

function createDomElements() {
  const parentElement = document.getElementById("mainArea");
  
  // Check if parentElement is null
  if (!parentElement) {
    console.error("Parent element not found.");
    return;
  }

  const currentChildren = Array.from(parentElement.children) as HTMLElement[];

  // just counting
  let added = 0,
    deleted = 0,
    updated = 0;

  // Now, we'll compare our new vDOM to our actual DOM
  vDOM.forEach(function (item) {
    // Check if a child with this ID already exists in the DOM
    const existingChild = currentChildren.find(function (child) {
      return child.dataset.id === String(item.id);
    });

    if (existingChild) {
      updated++;

      // If it exists, update it
      existingChild.children[0].innerHTML = item.title;
      existingChild.children[1].innerHTML = item.description;

      // Remove it from the currentChildren array
      currentChildren.filter(function (child) {
        return child !== existingChild;
      });
    } else {
      added++;
      // If it doesn't exist in the DOM, create it

      // creating
      const childElement = document.createElement("div");
      childElement.dataset.id = item.id.toString(); // Store the ID on the element for future lookups

      const grandChildElement1 = document.createElement("span");
      grandChildElement1.innerHTML = item.title;

      const grandChildElement2 = document.createElement("span");
      grandChildElement2.innerHTML = item.description;

      const grandChildElement3 = document.createElement("button");
      grandChildElement3.innerHTML = "Delete";
      grandChildElement3.setAttribute("onclick", "deleteTodo(" + item.id + ")");

      // appending
      childElement.appendChild(grandChildElement1);
      childElement.appendChild(grandChildElement2);
      childElement.appendChild(grandChildElement3);
      parentElement.appendChild(childElement);
    }
  });

  // Any children left in the currentChildren array no longer exist in the data, so remove them
  currentChildren.forEach(function (child) {
    deleted++;

    parentElement.removeChild(child);
  });

  console.log("Added: " + added);
  console.log("Updated: " + updated);
  console.log("Deleted: " + deleted);
  console.log();
}

function updateVirtualDom(data: { title: string; description: string; id: number }[]) {
  vDOM = data.map((item) => {
    return {
      id: item.id,
      title: item.title,
      description: item.description,
    };
  });
}

window.setInterval(() => {
  const todos: { title: string; description: string; id: number }[] = [];
  for (let i = 0; i < Math.floor(Math.random() * 100); i++) {
    todos.push({
      title: "Go to gym -",
      description: " Hit chest today",
      id: i + 1,
    });
  }
  updateVirtualDom(todos);
}, 5000); // for pushing in batch

window.setInterval(() => {
  createDomElements();
}, 1000);
