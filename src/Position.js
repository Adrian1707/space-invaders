export function comparePosition(){
  return verticalPosition() && horizontalPosition()
}

export function verticalPosition(){
  return bulletPosition().y < enemyPosition().y
}

export function getPosition(enemyORBulletId){
  var enemyORBullet = document.getElementById(enemyORBulletId);
  var left = enemyORBullet.getBoundingClientRect().left
  var right = enemyORBullet.getBoundingClientRect().right
  var width = enemyORBullet.getBoundingClientRect().width
  var height = enemyORBullet.getBoundingClientRect().height
  var top = enemyORBullet.getBoundingClientRect().top
  return {"left": left, "y": top, "width": width, "height": height, "right": right}
}

function horizontalPosition(){
  return (enemyPosition().right - bulletPosition().right >= 0 &&
        enemyPosition().right - bulletPosition().right <= enemyPosition().width) ||
        (enemyPosition().left - bulletPosition().left >= bulletPosition().width - enemyPosition().width &&
        enemyPosition().left - bulletPosition().left <= bulletPosition().width)
}

function enemyPosition(){
  return getPosition("enemy")
}

function bulletPosition(){
  return getPosition("bullet")
}
