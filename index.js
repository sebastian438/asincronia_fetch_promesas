//RESUELVE TUS EJERCICIOS AQUI


//EJERCICIO 01

// urlBase01 = "https://dog.ceo/api/breeds/list/all"

// const getAllBreeds = async () => {
//     const response = await fetch(`${urlBase01}`);
//     let data;
//     let lista = []
//     if (response.ok) {
//         data = await response.json();
//         let razas = data.message;
//         let llaves = Object.keys(razas);
//         return llaves;
//     }
// }


//EJERCIO 02

// const getRandomDog = async () => {
//     const response = await fetch("https://dog.ceo/api/breeds/image/random");

//     let data;
//     if (response.ok) {
//         data = await response.json();
//         let imagen = data.message;
//         return imagen;
//     }
// }



//EJERCICIO 03

// const urlBase03 = "https://dog.ceo/api/breed";
// const raza = "komondor"

// const getAllImagesByBreed = async () => {

//     try {
//         const response = await fetch(`${urlBase03}/${raza}/images`);
//         let data;
//         if (response.ok) {
//             data = await response.json();
//             let listaRazas = data.message;
//             return listaRazas;
//         } else {
//             throw ("Error en la data")
//         }
//     } catch (error) {
//         throw error;
//     }

// }

// getAllImagesByBreed();


//EJERCICIO 04


// const urlBase04 = "https://dog.ceo/api/breed";
// // const raza = "komondor"

// const getAllImagesByBreed2 = async (breed) => {

//     try {
//         const response = await fetch(`${urlBase04}/${breed}/images`);
//         let data;
//         if (response.ok) {
//             data = await response.json();
//             let listaRazas = data.message;
//             return listaRazas;
//         } else {
//             throw ("Error en la data")
//         }
//     } catch (error) {
//         throw error;
//     }

// }


//EJERCICIO 05

// const urlBase05 = "https://api.github.com/users"

// const getGitHubUserProfile = async (username) => {
//     try {
//         const response = await fetch(`${urlBase05}/${username}`);
//         let data;
//         if (response.ok) {
//             data = await response.json();
//             return data;
//         } else {
//             throw ("Error de la data");
//         }
//     } catch (error) {
//         throw error;
//     }
// }


//EJERCICIO 06

// const urlBase06 = "https://api.github.com/users"

// const printGithubUserProfile = async (username) => {
//     try {
//         const response = await fetch(`${urlBase06}/${username}`);
//         let data;
//         let name;
//         let img;
//         if (response.ok) {
//             data = await response.json();
//             img = data.avatar_url;
//             name = data.name;
//             return { img, name };
//         } else {
//             throw ("Error de la data");
//         }
//     } catch (error) {

//     }
// }


//EJERCICIO 07

const urlBase07 = "https://api.github.com/users";

const getAndPrintGitHubUserProfile = async (username) => {
    try {
        const response = await fetch(`${urlBase07}/${username}`);
        let data;
        let name;
        let numberReposPublic;
        let imgUser;
        if (response.ok) {
            data = await response.json();
            name = data.name;
            numberReposPublic = data.public_repos;
            imgUser = data.avatar_url;
            return `<section><img src="${imgUser}" alt="${name}"><h1>${name}</h1><p>Public repos: ${numberReposPublic}</p></section>`;
        } else {
            throw ("Error en la date");
        }
    } catch (error) {
        throw error;
    }
}





