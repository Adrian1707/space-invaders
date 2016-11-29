export function comparePosition(){
  return verticalPosition() && horizontalPosition()
}

export function verticalPosition(){
  return bulletPosition().y < enemyPosition().y
}

function getPosition(enemyORBulletId){
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
        enemyPosition().right - bulletPosition().right <= 40) ||
        (enemyPosition().left - bulletPosition().left >= -30 &&
        enemyPosition().left - bulletPosition().left <= 10)
}

function enemyPosition(){
  return getPosition("enemy")
}

function bulletPosition(){
  return getPosition("bullet")
}


