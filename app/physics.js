export default {
  createObject
};

const _ = require('lodash');

function createObject(specs) {
  const world = specs.world;
  const name = specs.name;
  const size = specs.size;
  const position = specs.position;
  const speed = {
    x: 0,
    y: 0,
  };
  const that = {
    name,
    position,
    speed,
    size,
  };

  that.move = move;

  return that;

  // ------------------------------------------------------

  function getPosition() {
    return position;
  }

  function move() {
    const objectA = _.cloneDeep(that);

    objectA.position.x = moveAxis('x');
    objectA.position.y = moveAxis('y');

    const objectB = checkCollisions(objectA);

    if (objectB) {
      moveObjectUntilCollision(that, objectB);
      speed.x = bounce(speed.x);
      speed.y = bounce(speed.y);
    } else {
      position.x = moveAxis('x');
      position.y = moveAxis('y');
      speed.x = decelerate(speed.x);
      speed.y = decelerate(speed.y);
    }
  }

  function checkCollision(objectA, objectB) {
    return !(
      (objectB.position.x >= objectA.position.x + objectA.size.x)
       || (objectB.position.x + objectB.size.x <= objectA.position.x)
       || (objectB.position.y >= objectA.position.y + objectA.size.y)
       || (objectB.position.y + objectB.size.y <= objectA.position.y)
    );
  }

  function moveObjectUntilCollision(objectA, objectB) {
    const ghost = _.cloneDeep(objectA);
    let collision = true;
    while (collision) {
      if (ghost.speed.x > 0 && ghost.position.x+1 < ghost.position.x+speed.x) {
        ghost.position.x++;
      } else if (ghost.speed.x < 0 && ghost.position.x-1 > ghost.position.x+speed.x) {
        ghost.position.x--;
      }
      if (ghost.speed.y > 0 && ghost.position.y+1 < ghost.position.y+speed.y) {
        ghost.position.y++;
      } else if (ghost.speed.y < 0 && ghost.position.y-1 > ghost.position.y+speed.y) {
        ghost.position.y--;
      }
      if (checkCollision(ghost, objectB)) {
        collision = false;
      } else {
        position.x = ghost.position.x;
        position.y = ghost.position.y;
      }
    }
  }

  function checkCollisions(objectA) {
    return world.objects.find(objectB => {
      if (name === objectB.name) {
        return false;
      }
      if (!checkCollision(objectA, objectB)) {
        return false;
      }
      return objectB;
    });
  }

  function moveAxis(axis) {
    if (speed[axis] === 0) {
      return position[axis];
    }
    return position[axis] + speed[axis];
  }
}

function decelerate(speed) {
  if (speed > 0) {
    return Math.floor(speed / 2);
  }
  return Math.ceil(speed / 2);
}

function bounce(speed) {
  if (speed > 0) {
    return -Math.floor(speed / 5);
  }
  return -Math.ceil(speed / 5);
}
