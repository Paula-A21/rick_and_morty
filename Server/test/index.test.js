const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

const character = {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    origin: {
        name: 'Earth (C-137)',
        url: 'https://rickandmortyapi.com/api/location/1',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
}


describe("_Test de RUTAS_", () => {
    describe(`GET /rickandmorty/character/:id`, () => {

        
        it(`Responde con status: 200`, async () => {
            const response = await agent.get('/rickandmorty/character/1');
            expect(response.statusCode).toEqual(200);
        })
        it(`Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"`, async () => {    
            
            const response = await agent.get('/rickandmorty/character/1');
            
            for(const prop in character){
                expect(response.body).toHaveProperty(prop);
            } 

            // expect(character.body).toHaveProperty('id');
            // expect(character.body).toHaveProperty('name');
            // expect(character.body).toHaveProperty('species');
            // expect(character.body).toHaveProperty('gender');
            // expect(character.body).toHaveProperty('status');
            // expect(character.body).toHaveProperty('origin');
            // expect(character.body).toHaveProperty('image');
            
        });
        it(`Si hay un error responde con status: 500`, async () => {
            const response = await agent.get('/rickandmorty/character/1006k');
            expect(response.statusCode).toEqual(500);
        })
    })

    describe("_GET /rickandmorty/login_", () => {
        const access = { //se modifica aunque sea constante porque modifico una propiedad dentro del objeto, no el objeto como tal
            access: true
        };
        
        it("Responde con un objeto con la propiedad access en true si la información del usuario es válida", async () => {
            const login = await agent.get(`/rickandmorty/login/?email=paula123@gmail.com&password=quesito21`); 
            expect(login.body).toEqual(access);
        } )
        it("Responde con un objeto con la propiedad access en false si la información del usuario es inválida", async () => {
            const login = await agent.get(`/rickandmorty/login/?email=szadgf&password=z5148`); 
            access.access = false;
            expect(login.body).toEqual(access);
        } )
  
    })

    describe("_POST /rickandmorty/fav_", () => {

        it("Debe guardar el personaje en favoritos", async () => {
            const response = await agent.post('/rickandmorty/fav').send(character);
            expect(response.body).toContainEqual(character); 
        })
        it("Debe agregar personajes a favoritos sin eliminar los que ya existen", async () => {
            character.id = 2121;
            character.name = "Pepito";
            const response = await agent.post('/rickandmorty/fav').send(character);
            expect(response.body.length).toBe(2);
        })
    })

    describe("_DELETE /rickandmorty/fav/:id_", () => {
        it("Si el ID solicitado no existe, debería retornar un arreglo con todos los favoritos", async () => {
            const response = await agent.delete('/rickandmorty/fav/2asd');
            expect(response.body.length).toBe(2); 
        })
        it("Si el ID solicitado existe, debería eliminarlo correctamente", async () => {
            const response = await agent.delete('/rickandmorty/fav/2121');
            expect(response.body.length).toBe(1); 
        })
    })

})
