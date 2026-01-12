// SIDE NAVBAR
const sidenav = document.querySelector(".side-navbar");

function showNavbar() {
  sidenav.style.left = "0";
}

function closeNavbar() {
  sidenav.style.left = "-60%";
}

// ROOM DATA
const rooms = {
  "0231": { name: "Conference Hall", floor: 0 },
  "0331": { name: "Principal Room", floor: 0 },
  "0332": { name: "Office", floor: 0 },

  "0411": { name: "Lab", floor: 0 },
  "0412": { name: "Lab", floor: 0 },

  "0451": { name: "Mechatronics Lab", floor: 0 },
  "0452": { name: "Students Study Room", floor: 0 },
  "0453": { name: "CAD Lab", floor: 0 },
  "0454": { name: "CAD Lab", floor: 0 },

  "0481": { name: "Manufacturing Lab", floor: 0 },
  "0482": { name: "Survey Lab", floor: 0 },

  "0511": { name: "Spark", floor: 0 },
  "0512": { name: "Startup Office", floor: 0 },

  "0541": { name: "Staff Room", floor: 0 },
  "0542": { name: "Staff Room", floor: 0 },

  "0561": { name: "Room", floor: 0 },
  "0562": { name: "Room", floor: 0 },

  "0581": { name: "CNC Lab", floor: 0 },

  "0611": { name: "Electrical Mechanics Lab", floor: 0 },

  "0651": { name: "DOM Lab", floor: 0 },
  "0652": { name: "FM Lab", floor: 0 },

  "0671": { name: "Thermal Lab", floor: 0 },

  "0731": { name: "Soil Lab", floor: 0 },
  "0732": { name: "Concrete Lab", floor: 0 },

  "0771": { name: "Room", floor: 0 },
  "0772": { name: "Room", floor: 0 },

  "0851": { name: "Strength of Materials Lab", floor: 0 },
  "0852": { name: "MO Lab", floor: 0 },

  "0871": { name: "Agri Lab 1", floor: 0 },
  "0872": { name: "Agri Lab 2", floor: 0 },

  "0931": { name: "Room", floor: 0 },
  "0971": { name: "Room", floor: 0 }
};

// FORMAT ROOM NUMBER
function formatRoom(room) {
  return room.padStart(4, "0");
}

// NAVIGATION LOGIC (IF STATEMENTS)
function navigate() {
  const current = formatRoom(document.getElementById("currentRoom").value.trim());
  const dest = formatRoom(document.getElementById("destinationRoom").value.trim());
  const output = document.getElementById("output");

  if (!rooms[current]) {
    output.innerHTML = "❌ Current room not found";
    return;
  }

  if (!rooms[dest]) {
    output.innerHTML = "❌ Destination room not found";
    return;
  }

  if (current === dest) {
    output.innerHTML = "✅ You are already in this room";
    return;
  }

  let direction = "";

  if (rooms[current].floor === rooms[dest].floor) {
    direction = "➡️ Same floor. Walk straight.";
  } else if (rooms[current].floor < rooms[dest].floor) {
    direction = "⬆️ Go upstairs.";
  } else {
    direction = "⬇️ Go downstairs.";
  }

  output.innerHTML = `
    <b>From:</b> ${current} (${rooms[current].name})<br>
    <b>To:</b> ${dest} (${rooms[dest].name})<br><br>
    <b>Direction:</b> ${direction}
  `;
}
