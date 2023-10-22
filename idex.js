x = window.prompt('Enter month: ');
x=Number(x)

switch (x) {
  case 1:
    document.write(`${x} represents January`);
    break;
  case 2:
    document.write(`${x} represents February`);
    break;
  case 3:
    document.write(`${x} represents Match`);
    break;
  case 4:
      document.write(`${x} represents April`);
      break;
  case 5:
    document.write(`${x} represents May`);
    break;
  case 6:
      document.write(`${x} represents June`);
    break;
  case 7:
    document.write(`${x} represents July`);
    break;
  case 8:
    document.write(`${x} represents Aug`);
    break;
  case 9:
    document.write(`${x} represents sep`);
    break;
  case 10:
      document.write(`${x} represents Oct`);
      break;
  case 11:
    document.write(`${x} represents Nov`);
    break;
  case 12:
      document.write(`${x} represents Dec`);
    break;
  default:
    document.write(`Invalid input`);
}

