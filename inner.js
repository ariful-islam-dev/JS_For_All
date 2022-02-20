function something(greet, name) {
  function getFirstName() {
    if (name) {
      return name.split(" ")[name.split(" ").length-1];
    }else{
        return ' '
    }
  }
  const message = greet + " " + getFirstName();
  console.log(message);
}

something("Hello!, ", "Ariful Islam Khan");

