/** @type {HTMLCanvasElement} */
import enemypath4 from '../imgs/enemy4.png'

export default function useGame({ canva }) {

    const initGame = () => {
        const can = canva.current
        const draw_ = can.getContext('2d')

        const CANVAS_WIDTH = can.width = 400
        const CANVAS_HEIGHT = can.height = 900
        
        let gameFrame = 0

        const numberOfEnemies = 30

        const enemiesArray = []

        class Enemy {
            constructor({ speed, sprite, path }) {
                this.image = new Image()
                this.image.src = path
                this.sprite = {
                    width: sprite.width,
                    height: sprite.height
                }
                this.width = this.sprite.width / 2.5
                this.height = this.sprite.height / 2.5
                this.x = Math.random() * (CANVAS_WIDTH - this.width)
                this.y = Math.random() * (CANVAS_HEIGHT - this.height)
                this.newX = Math.random() * (CANVAS_WIDTH - this.width)
                this.newY = Math.random() * (CANVAS_HEIGHT - this.height)
                this.speed = {
                    x: speed.x,
                    y: speed.y
                }
                this.frame = 0
                this.flapSpeed = Math.floor(Math.random() * 5) + 1
                this.interval = Math.floor(Math.random() * 200 + 50)
            }

            update() {
                if(gameFrame % this.interval === 0) {
                    this.newX = Math.random() * (CANVAS_WIDTH - this.width)
                    this.newY = Math.random() * (CANVAS_HEIGHT - this.height)
                }
                let dx = this.x - this.newX
                let dy = this.y - this.newY
                this.x -= dx/20
                this.y -= dy/20
                this.angle += this.angleSpeed

                if(this.x + this.width < 0) {
                    this.x = CANVAS_WIDTH
                }
                
                if(this.y + this.height < 0) {
                    this.y = CANVAS_HEIGHT
                }

                if(this.y > CANVAS_HEIGHT) {
                    this.y = -this.height
                }
                // this.x += this.speed.x
                if(gameFrame % this.flapSpeed === 0) {
                    this.frame > 7 ? this.frame = 0 : this.frame ++
                }
            }

            draw() {
                // draw_.fillRect(this.x, this.y, this.width, this.height)
                // draw_.strokeRect(this.x, this.y, this.width, this.height)
                draw_.drawImage(this.image, this.sprite.width * this.frame, 0, this.sprite.width, this.sprite.height, this.x, this.y, this.width, this.height)
            }
        }

        for(let i=0;i<numberOfEnemies;i++) {
            // enemiesArray.push(new Enemy({
            //     speed: {
            //         x: Math.random() * 4 - 2,
            //         y: Math.random() * 4 - 2
            //     },
            //     sprite: {
            //         width: 293,
            //         height: 155
            //     },
            //     path: enemypath1
            // }))
            // enemiesArray.push(new Enemy({
            //     speed: {
            //         x: Math.random() * 4 + 1,
            //         y: Math.random() * 4 + 1
            //     },
            //     sprite: {
            //         width: 266,
            //         height: 188
            //     },
            //     path: enemypath2
            // }))
            // enemiesArray.push(new Enemy({
            //     speed: {
            //         x: Math.random() * 4 + 1,
            //         y: Math.random() * 4 + 1
            //     },
            //     sprite: {
            //         width: 218,
            //         height: 177
            //     },
            //     path: enemypath3
            // }))
            enemiesArray.push(new Enemy({
                speed: {
                    x: Math.random() * 4 + 1,
                    y: Math.random() * 4 + 1
                },
                sprite: {
                    width: 213,
                    height: 213
                },
                path: enemypath4
            }))
        }

        const animate = () => {
            draw_.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
            enemiesArray.forEach((enemy) => {
                enemy.update()
                enemy.draw()
            })
            gameFrame++
            requestAnimationFrame(animate)
        }
        animate()
    }

    return [initGame]
}
