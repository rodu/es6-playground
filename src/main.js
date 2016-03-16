function temporalDeadZone(){
  let myName = 'Rob';
  console.log(myName); // This should throw a reference error but Babel is not!
}

function temporalDeadZoneBlock(argument) {
  {
    let myName = 'Rob';
  }

  console.log(myName);
}

temporalDeadZoneBlock();