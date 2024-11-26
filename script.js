// if/else statement

// operators
/*

if(her skriver vi sjekk){
  her skriver vi hva som skal skje
} else {
  hvis ikke if statement er true, så skjer det vi skriver her
}

= betyr å erklære noe
=== betyr samme verdi og samme datatype

< betyr mindre enn (less then)
> betyr større enn (more then)

&& betyr og (and)
|| betyr eller (or)

! betyr "med mindre", brukes å gjerne for å sjekke om data er undefined

falsy verdier:

false
undefined
Null
NAN


*/

/*

let isPresent = true

if(isPresent){
console.log("person is present")
}else{
 console.log("person is away")
}

let closingHour = 22;
let timeNow = 23;

if (closingHour > timeNow) {
  console.log('Shop is open');
} else {
  console.log('shop is closed');
}

let age = 23;

if (age > 18) {
  console.log('Welcome to the nightclub');
} else {
  console.log('sorry, you are not old enough');
}

const hour = 15;

// Sjekker om klokken er mindre enn 12
if (hour < 12) {
  console.log('Good morning');
} else if (hour === 12) {
  // Sjekker om klokken er akkurat 12
  console.log('The clock is 12!');
} else if (hour > 14 && hour < 18) {
  // Sjekker om klokken er mellom 14 og 18.
  console.log('The clock is between 14 and 18');
} else {
  // Tidspunkt som ikke passer før 12 eller akkurat 12
  console.log('Good day');
}


//OPPGAVE//

Den lokale butikken stenger kl.21, lag en sjekk som ser om butikken er åpen
1.lag en variabel som inneholder tidspunktet på dagen
2. lag en if statement som sjekker om variabel for tidspunkt er mindre enn stengetid
3. legg til en else som console.log en beskjed som sier at butikken er stengt om tidspunkt er etter stengetid

BONUS!

4. lag en variabel for åpningstid og sjekk om tidspunktet er etter åpningstid OG før stengetid



*/
//
//

// få inn verdier fra forms i Html

// if else som sjekker hvilken nummertype some er valgt og som gjør om tall

let displayBtn = document.querySelector('#convertButton');

function unitConverter() {
  let displayResult = document.querySelector('#displayResult');
  let unitInput = parseFloat(document.querySelector('#unitInput').value);
  let unitFrom = document.querySelector('#unitFrom').value;
  let unitTo = document.querySelector('#unitTo').value;
  let convertedNumber = 0;

  if (Number.isNaN(unitInput)) {
    displayResult.textContent = "Skriv inn et gyldig tall.";
    displayResult.style.color = "red";
    return;
  }

  // Check if units are the same
  if (unitFrom === unitTo) {
    displayResult.textContent = "Velg to ulike målenheter.";
    displayResult.style.color = "red";
    return;
  }

  if (unitFrom === 'MM' && unitTo === 'CM') {
    convertedNumber = unitInput / 10
  }

  else if (unitFrom === 'MM' && unitTo === 'M') {
    convertedNumber = unitInput / 1000;
  }

  else if (unitFrom === 'MM' && unitTo === 'KM') {
    convertedNumber = unitInput / 1000000;
  }

  else if(unitFrom === 'CM' && unitTo === 'MM'){
    convertedNumber = unitInput * 10
  }

  else if(unitFrom === 'CM' && unitTo === 'M'){
    convertedNumber = unitInput /100
  }

  else if(unitFrom === 'CM' && unitTo === 'KM'){
    convertedNumber = unitInput / 100000
  }

  else if(unitFrom === 'M' && unitTo === 'MM'){
    convertedNumber = unitInput *1000
  }

  else if(unitFrom === 'M' && unitTo === 'CM'){
    convertedNumber = unitInput * 100
  }

  else if(unitFrom === 'M' && unitTo === 'KM'){
    convertedNumber = unitInput / 1000
  }

  else if(unitFrom === 'KM' && unitTo === 'MM'){
    convertedNumber = unitInput * 1000000
  }

  else if(unitFrom === 'KM' && unitTo === 'CM'){
    convertedNumber = unitInput *100000
  }

  else if(unitFrom === 'KM' && unitTo === 'M'){
    convertedNumber = unitInput * 1000
  }

  

  console.log(convertedNumber);
  displayResult.textContent = convertedNumber;
}


displayBtn.addEventListener('click', unitConverter);
