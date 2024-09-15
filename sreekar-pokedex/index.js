#!/usr/bin/env node


////////////////////////////////////////////  CLI OPTIONS  ///////////////////////////////////////////////////////////////////


// const yargs = require("yargs");
// const {argv} = yargs(process.argv)
// console.log(process.argv)

// const pokemonData = async (pokemonName) => {
//    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
//    const pokemon = await response.json();
//    const moves = pokemon.moves.map( ({move})=> move.name )
//    console.log(moves.slice(0,5))
// }

// pokemonData(argv.pokemon)



////////////////////////////////////////////  CLI INTERACTIVITY  ///////////////////////////////////////////////////////////////////

const inquirer = require("inquirer");

const pokemonData = async (pokemonName) => {
   const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
   const pokemon = await response.json();
   const moves = pokemon.moves.map( ({move})=> move.name )
   console.log(moves.slice(0,5))
}

// const prompt = inquirer.createPromptModule();

inquirer.prompt([
    {
        type : "input",
        name : "pokemon",
        message: "Enter a pokemon name to display some of its moves : "
    }
]).then((answers)=> {
    const pokemon = answers.pokemon;
    pokemonData(pokemon)
});


