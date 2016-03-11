function temporalDeadZone(){
  console.log(typeof myName);
  {
    let myName = 'Rob';
    console.log('myName in the block:', myName);
  }
}

temporalDeadZone();