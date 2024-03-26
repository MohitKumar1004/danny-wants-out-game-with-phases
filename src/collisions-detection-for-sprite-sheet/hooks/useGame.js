import boomImage from '../imgs/boom.png'
import boomAudio from '../audios/boom.wav'

export default function useGame({ canva }) {

    // pre incrementation is faster than post incrementation as in pre, ++i calue is added early whereas in post, value is copied and that value is added
    // Multiplying by 0.5 is faster than dividing by 2
    const initGame = () => {
        const can = canva.current
        const canvasPosition = can.getBoundingClientRect()
        const draw_ = can.getContext('2d')

        const CANVAS_WIDTH = can.width = 500
        const CANVAS_HEIGHT = can.height = 700

        draw_.fillStyle = 'white'
        draw_.fillRect(0,0,20,20)
        const explosions = []

        class Explosion {
            constructor(x, y) {
                this.spriteWidth = 200
                this.spriteHeight = 179
                this.width = this.spriteWidth * 0.7
                this.height = this.spriteHeight * 0.7
                this.x = x
                this.y = y
                this.image = new Image()
                this.image.src = boomImage
                this.audio = new Audio()
                this.audio.src = boomAudio
                this.frame = 0
                this.timer = 0
                this.angle = Math.random() * 6.2
            }
            
            update() {
                if(this.frame===0)this.audio.play()
                ++this.timer
                if(this.timer%10===0) {
                    this.frame++;
                }
            }

            draw() {
                draw_.save()
                draw_.translate(this.x, this.y)
                draw_.rotate(this.angle)
                draw_.drawImage(this.image, this.spriteWidth * this.frame, 0, this.spriteWidth, this.spriteHeight, 0 - this.width * 0.5, 0 - this.height * 0.5, this.width, this.height)
                draw_.restore()
            }
        }

        const createAnimations = (event) => {
            let positionX = event.x - canvasPosition.left
            let positionY = event.y - canvasPosition.top
            explosions.push(new Explosion(positionX, positionY))
            // draw_.fillRect(event.x - canvasPosition.left - 25, event.y - canvasPosition.top - 25, 50, 50)
        }

        // window.removeEventListener('click',(e)=>motionFunc(e))

        window.addEventListener('click',(e)=>createAnimations(e))
        // window.addEventListener('mousemove',(e)=>createAnimations(e))
        
        const animate = () => {
            draw_.clearRect(0, 0, can.width, can.height)
            for(let i=0; i<explosions.length; i++) {
                explosions[i].update()
                explosions[i].draw()
                if(explosions[i].frame > 5) {
                    explosions.splice(i, 1)
                    i--;
                }
            }
            requestAnimationFrame(animate)
        }
        animate()

    }

    return [initGame]
}
