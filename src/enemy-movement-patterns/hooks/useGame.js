/** @type {HTMLCanvasElement} */
import enemypath1 from '../imgs/enemy1.png'
import enemypath2 from '../imgs/enemy2.png'
import enemypath3 from '../imgs/enemy3.png'
import enemypath4 from '../imgs/enemy4.png'

export default function useGame({ canva }) {

    const initGame = () => {
        const can = canva.current
        const draw_ = can.getContext('2d')

        const CANVAS_WIDTH = can.width = 500
        const CANVAS_HEIGHT = can.height = 900
        
        var gameFrame = 0

        const numberOfEnemies = 100

        const enemiesArray = []

        class Enemy {
            constructor({ path }) {
                this.image = new Image()
                this.image.src = path
                this.sprite = {
                    width: 293,
                    height: 155
                }
                this.width = this.sprite.width / 2.5
                this.height = this.sprite.height / 2.5
                this.x = Math.random() * (CANVAS_WIDTH - this.width)
                this.y = Math.random() * (CANVAS_HEIGHT - this.height)
                // this.speed = {
                //     x: Math.random() * 4 - 2,
                //     y: Math.random() * 4 - 2
                // }
                this.frame = 0
                this.flapSpeed = Math.floor(Math.random() * 5) + 1
            }

            update() {
                // this.x += this.speed.x
                // this.y += this.speed.y
                this.x += Math.random() * 5 - 2.5
                this.y += Math.random() * 5 - 2.5
                if(gameFrame % this.flapSpeed === 0) {
                    this.frame > 4 ? this.frame = 0 : this.frame ++
                }
            }

            draw() {
                // draw_.fillRect(this.x, this.y, this.width, this.height)
                // draw_.strokeRect(this.x, this.y, this.width, this.height)
                draw_.drawImage(this.image, this.sprite.width * this.frame, 0, this.sprite.width, this.sprite.height, this.x, this.y, this.width, this.height)
            }
        }

        for(let i=0;i<numberOfEnemies;i++) {
            enemiesArray.push(new Enemy({ path: enemypath1 }))
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
