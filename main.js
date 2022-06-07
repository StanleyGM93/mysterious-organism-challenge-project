// Returns a random DNA base - Provided by Codecademy
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases - Provided by Codecademy
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  // Factory function that can be used to generate pAequor objects with built-in functionality
  const pAequorFactory = (number, arr) => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return {
      specimenNum: number,
      dna: arr,
      mutate() {
        const randomIndex = Math.floor(Math.random() * 15);
        const uniqueDnaBases = dnaBases.filter(base => base !== this.dna[randomIndex])
        const randomBaseIndex = Math.floor(Math.random() * 3);
        this.dna[randomIndex] = uniqueDnaBases[randomBaseIndex];
        return this.dna;
      },
      compareDNA(obj) {
        let dnaMatch = 0;
        let percentageMatch;
        for (let i = 0; i < 15; i++) {
          if (this.dna[i] === obj.dna[i]) {
            dnaMatch++;
          }
        }
        percentageMatch = dnaMatch / 15 * 100;
        return `specimen #${this.specimenNum} and specimen #${obj.specimenNum} have ${percentageMatch}% DNA in common`;
      },
      willLikelySurvive() {
        let survivalProbability = 15 * 0.6;
        let dnaBaseIsCG = 0;
        for (let i = 0; i < 15; i++) {
          if (this.dna[i] === 'C' || this.dna[i] === 'G')
          dnaBaseIsCG++
        }
        if (dnaBaseIsCG < survivalProbability) {
          return false;
        } else {
          return true;
        }
      }
    }
  }
  
// Creates 30 pAequor objects that have a 60% chance of survival
  const createThirtyPAequorInstances = () => {
    const thirtyPAequorInstances = [];
    let i = 0;
    let j = 0;
    do {
      thirtyPAequorInstances[i] = pAequorFactory(i, mockUpStrand());
      if (thirtyPAequorInstances[i].willLikelySurvive() === false) {
        thirtyPAequorInstances.pop();
        i = i;
      } else {
        i++;
      }
    } while (i < 30);
    return thirtyPAequorInstances;
  }
  
  // Printing 30 pAequor objects to the console
  console.log(createThirtyPAequorInstances());
  
  
  
  
  
  