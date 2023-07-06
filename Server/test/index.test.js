const app = require('../src/app');
const session = require('supertest');
const agent = session(app);
const {email, password} = require(`../src/utils/users`);

describe("_Test de RUTAS_", () => {
    describe(`GET /rickandmorty/character/:id`, async () => {

        const character = await agent.get('/rickandmorty/character/1');

        it(`Responde con status: 200`, () => {
           character.expect(200);
        })
        it(`Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"`, () => {
            expect(character.body).toHaveProperty('id');
            expect(character.body).toHaveProperty('name');
            expect(character.body).toHaveProperty('species');
            expect(character.body).toHaveProperty('gender');
            expect(character.body).toHaveProperty('status');
            expect(character.body).toHaveProperty('origin');
            expect(character.body).toHaveProperty('image');
            expect(character.statusCode).toEqual(200);
        });
        it(`Si hay un error responde con status: 500`, () => {
            expect(() => character.body.id > 826).toThrow(character.error.message);
            expect(character.statusCode).toEqual(500);
        })

        
    })

    describe("_GET /rickandmorty/login_", async () => {
        const login = await agent.post(`/rickandmorty/login/?email=${email}&password=${password}`); 
        
        it(login.body).toEqual({access: true}); //no se
    })

    describe("_POST /rickandmorty/fav_", () => {
        
    })
})
