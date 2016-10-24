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

    if (!objectB) {
      position.x = moveAxis('x');
      position.y = moveAxis('y');
      speed.x = decelerate(speed.x);
      speed.y = decelerate(speed.y);
    } else {
      speed.x = 0;
      speed.y = 0;
    }
  }

  function checkCollision(object1, object2) {
    return !(
      (object2.position.x >= object1.position.x + object1.size.x)
       || (object2.position.x + object2.size.x <= object1.position.x)
       || (object2.position.y >= object1.position.y + object1.size.y)
       || (object2.position.y + object2.size.y <= object1.position.y)
    );
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
  return -Math.floor(speed / 2);
}
