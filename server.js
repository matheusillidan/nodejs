
import { fastify } from 'fastify'
import { databasememory } from './database-memory.js'


const server = fastify()

const database = new databasememory()

server.post('/videos', (request, replay) => {
    database.create({
        title: 'video 01',
        description: 'esse é o video 01',
        duration: 180,
    })

    
    return replay.status(201).send();
})

server.get('/videos', () => {
    return 'hello matheus.dev'
})

server.delete('/videos:id', () => {
    return 'hello world'
})

server.put('/videos:id', () => {
    return 'hello rockseat'
})

server.listen({
    port: 3333,
}) 