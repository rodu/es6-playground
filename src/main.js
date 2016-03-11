function temporalDeadZone(){
  console.log(myName); // This should throw a reference error but Babel is not!
  let myName = 'Rob';
}

function temporalDeadZoneBlock(argument) {
  {
    let myName = 'Rob';
  }

  console.log(myName);
}

temporalDeadZoneBlock();