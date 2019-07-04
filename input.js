let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data',handleUserInput);
  return stdin;
};

const handleUserInput = (data) => {
  if (data === '\u0003') {
    process.exit();
  } else if (data === 'w') {
    connection.write("Move: up"); //str.split(": ")
  } else if (data === 'a') {
    connection.write("Move: left");
  } else if (data === 's') {
    connection.write("Move: down");
  } else if (data === 'd') {
    connection.write("Move: right");
  } else if (data === 'p') {
    //connection.write("Say: \b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b123456789");
    //connection.write("Say: ...................123456789"); // sat takes 20 char// print str.slice(0,20) str = "...................123456789"
    connection.write("Say: before\n\nAfter");
  }
    
};


module.exports = {setupInput};