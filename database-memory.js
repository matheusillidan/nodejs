import { randomUUID } from "node:crypto"

export class databasememory {
    #videos = new Map()

    list() {
        return this.#videos.value()
    }

    create(videos) {
        const videoid = randomUUID()

        return this.#videos.set(videoid, videos)
    }

    delete(id) {
        this.#videos.set(id, videos)
    }
}