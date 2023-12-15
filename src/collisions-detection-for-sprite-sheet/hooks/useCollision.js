export default function useCollision() {

  // const r1 = {
  //   x: 5,
  //   y: 5,
  //   width: 50,
  //   height: 50
  // }
  // const r2 = {
  //   x: 20,
  //   y: 10,
  //   width: 10,
  //   height: 10
  // }

  const checkRectsCollision = (rect1,rect2) => {
    // if(
    //   rect1.x < rect2.x + rect2.height &&
    //   rect1.x + rect1.height > rect2.x &&
    //   rect1.y < rect2.y + rect2.width &&
    //   rect1.y + rect1.height > rect2.y
    // ) {
    //   // collision detected

    // } else {
    //   // No collision detected

    // }
    if(
      rect1.x > rect2.x + rect2.height ||
      rect1.x + rect1.height < rect2.x ||
      rect1.y > rect2.y + rect2.width ||
      rect1.y + rect1.height < rect2.y
    ) {
      // No collision detected

    } else {
      // collision detected

    }
  }

  // const c1 = {
  //   x: 10,
  //   y: 10,
  //   radius: 300
  // }
  // const c2 = {
  //   x: 500,
  //   y: 500,
  //   radius: 150
  // }

  const checkCircsCollision = (circle1,circle2) => {
    // Using pythagorus theorem, as A = center point of circle 1, B = center point of circle 2 and  C = at dx and dy distance from one or another such that angle 90 degree is achieved
    let dx = circle1.x - circle2.x
    let dy = circle1.y - circle2.y
    let distance = Math.sqrt(dx * dx + dy * dy)
    let sumOfRadius = circle1.radius + circle2.radius

    if(distance < sumOfRadius) {
      // circles collide
    } else if(distance === sumOfRadius) {
      // circles are touching
    } else if(distance > sumOfRadius) {
      // no collision
    }
  }
  return [checkRectsCollision,checkCircsCollision]
}
