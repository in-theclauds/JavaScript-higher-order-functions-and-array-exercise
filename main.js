const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]; 

//forLoop

// for(let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }


//----shorter way of doing for loop--\\\\

// companies.forEach(function(company) {
// console.log(company.name)

// });



//FILTER
//----first with a forLoop, too long and unneccesary--\\\\

// let canDrink = [];
// for(let i = 0; i < ages.length; i++) {
//   if(ages[i] >= 21){
//     canDrink.push(ages[i]);
//   }
// }


// const canDrink = ages.filter(function(age) {
//   if(age >= 21) {
//     return true;
//   }
// })


//----BEST WAY OF DOING FILTER (WITH ARROW FUNCTIONS)--\\\\
// const canDrink = ages.filter(age => age >= 21);


//----FILTER RETAIL COMPANIES--\\\\

// const retailCompanies = companies.filter(function(company) {
//   if(company.category === 'Retail') {
//     return true;
//   }
// })


//----BEST WAY OF DOING FILTER (WITH ARROW FUNCTIONS)--\\\\
// const retailCompanies = companies.filter(company => company.category === 'Retail')


//GET 80'S COMPANIES

const eightiesCompanies = companies.filter( company => (company.start >= 1980 &&  company.start < 1990));

// console.log(eightiesCompanies);


//- GET COMPANIES THAT LASTED 20 YRS OR MORE

const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));



//map(creates a new [ARRAY] of anything from an existing array)
 //--create array of company names---\\


 
 //  const testMap = companies.map(function(company) {
   //   return `${company.name} [${company.start} - ${company.end}]`;
   //  })
   
   // console.log(testMap);
   
   //--shorthand--\\\
   const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);

//squared ages
   const agesSquare = ages.map( age => Math.sqrt (age));

///ages times 2
   const agesTimesTwo = ages.map( age => age * 2);

  //  console.log(agesTimesTwo);


   //sort
  // const sortedCompanies = companies.sort(function(c1, c2) {
  //   if(c1.start > c2.start) {
  //     return 1;
  //   } else {
  //     return -1;
  //   }
  // });


  //sort using ternary operators--------using conditions-----
  // ? = if true                                             |
  // : = else                                                |
const sortedCompanies = companies.sort((a,b) => (a.start > b.start ? 1 : -1));

//   console.log(sortedCompanies);

const sortAges = ages.sort((a,b) => a - b);
// console.log(sortAges)


//reduce
//------long way
// const ageSum = ages.reduce(function(total, age) {
//   return total + age;
// }, 0);


////shorthand
const ageSum = ages.reduce((total, age) => total + age, 0);


//GET TOTAL YEARS FOR ALL COMPANIES

const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
// console.log(totalYears)



//COMBINED METHODS

const combined = ages
//array of all ages * 2
  .map(age => age * 2)
//filter anything that is 40 or over
  .filter(age => age >= 40)
  .sort((a,b) => a - b)
  .reduce((a,b) => a + b, 0);

  console.log(combined)
  