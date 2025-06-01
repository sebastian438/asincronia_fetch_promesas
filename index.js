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


const urlBase04 = "https://dog.ceo/api/breed";
// const raza = "komondor"

const getAllImagesByBreed2 = async (breed) => {

    try {
        const response = await fetch(`${urlBase04}/${breed}/images`);
        let data;
        if (response.ok) {
            data = await response.json();
            let listaRazas = data.message;
            return listaRazas;
        } else {
            throw ("Error en la data")
        }
    } catch (error) {
        throw error;
    }

}


