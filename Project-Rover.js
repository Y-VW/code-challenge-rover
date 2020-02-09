// Rover Object Goes Here
// ======================
let rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [{x: 0, y: 0}]
};



// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction){
    case "N": //North to West
      rover.direction = "W";
      break;
    case "E": //East to North
      rover.direction = "N";
      break;
    case "S": //South to East
      rover.direction = "E";
      break;
    case "W": //West to South
      rover.direction = "S";
      break;
  }
  console.log(`Rover was turned left. Rover is now facing the direction: ${rover.direction}.`);
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction){
    case "N": //North to East
      rover.direction = "E";
      break;
    case "E": //East to South
      rover.direction = "S";
      break;
    case "S": //South to West
      rover.direction = "W";
      break;
    case "W": //West to North
      rover.direction = "N";
      break;
  }
  console.log(`Rover was turned right. Rover is now facing the direction: ${rover.direction}.`);
}

function moveForward(rover){
  console.log("moveForward was called");
  switch (rover.direction){
    case "N": //Rover is facing north and is moving forward
      if (rover.y > 0){
        rover.y--;
        console.log(`Current position: ${rover.x},${rover.y}`);
      } else {
        console.log("Invalid input. You can't move rover out of the grid.");
      }
      break;
    case "E": //Rover is facing east and is moving forward
      if (rover.x < 9) {
        rover.x++;
        console.log(`Current position: ${rover.x},${rover.y}`);
      } else {
        console.log("Invalid input. You can't move rover out of the grid.");
      }
      break;
    case "S": //Rover is facing south and is moving forward
      if (rover.y < 9) {
        rover.y++;
        console.log(`Current position: ${rover.x},${rover.y}`);
      } else {
        console.log("Invalid input. You can't move rover out of the grid.");
      }
      break;
    case "W": //Rover is facing west and is moving forward
      if (rover.x > 0){
        rover.x--;
        console.log(`Current position: ${rover.x},${rover.y}`);
      } else {
        console.log("Invalid input. You can't move rover out of the grid.");
      }
      break;
  }
  rover.travelLog.push({x:rover.x,y:rover.y});
}

function moveBackward(rover){
  console.log("moveBackward was called");
  switch (rover.direction){
      case "N": //Rover is facing north and is moving backwards
      if (rover.y < 9){
          rover.y++;
          console.log(`Current position: ${rover.x},${rover.y}`);
    } else {
      console.log("Invalid input. You can't move rover out of the grid.");
    }
    break;
    case "E": //Rover is facing east and is moving backwards
    if (rover.x > 0){
        rover.x--;
        console.log(`Current position: ${rover.x},${rover.y}`);
    } else {
      console.log("Invalid input. You can't move rover out of the grid.");
    }
    break;
    case "S": //Rover is facing south and is moving backwards
    if (rover.y > 0){
        rover.y--;
        console.log(`Current position: ${rover.x},${rover.y}`);
    } else {
      console.log("Invalid input. You can't move rover out of the grid.");
    }
    break;
    case "W": //Rover is facing west and is moving backwards
    if (rover.x < 9){
        rover.x++;
        console.log(`Current position: ${rover.x},${rover.y}`);
      } else {
        console.log("Invalid input. You can't move rover out of the grid.");
      }
      break;     
    }
    rover.travelLog.push({x:rover.x,y:rover.y});
}

function command(rover, orders){
  for (let i = 0; i < orders.length; i++){
    let order = orders[i];
    switch (order){
      case "f": //Command the rover to move forward
        moveForward(rover);
        break;
      case "l": //Command the rover to turn left
        turnLeft(rover);
        break;
      case "r": //Command the rover to turn right
        turnRight(rover);
        break;
      case "b": //Command the rover to move backwards
        moveBackward(rover);
        break;
      default:
        console.log("Insert 'l' to turn left, insert 'r' to turn right, 'f' to move forward and 'b' to move backwards.");
    }
  }
}

command(rover,'rffrfflfrff');
console.log(rover.travelLog);