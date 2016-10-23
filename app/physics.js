export default {
  createObject
};

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
    moveAxis('x');
    moveAxis('y');

    const object = checkCollisions();

    if (object) {
      
    }
  }

  checkCollision(object1, object2) {
    return !(
      (object2.position.x >= object1.position.x + object1.size.x)
       || (object2.position.x + object2.size.x <= object1.position.x)
       || (object2.position.y >= object1.position.y + object1.size.y)
       || (object2.position.y + object2.size.y <= object1.position.y)
    );
  }

  function checkCollisions() {
    return world.objects.find(object => {
      if (name === object.name) {
        return false;
      }
      if (checkCollision(that, object)) {
        return false;
      }
      return object;
    });
  }

  function moveAxis(axis) {
    if (speed[axis] === 0) {
      return;
    }
    position[axis] = position[axis] += speed[axis];
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

function isCollisionAxis(axis, objectA, objectB) {
  return (objectA.position[axis] + objectA.size[axis]) > objectB.position[axis]
    && (objectA.position[axis]) < (objectB.position[axis] + objectB.size[axis]);
}
