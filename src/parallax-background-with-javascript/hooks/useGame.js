import bglayer1 from '../imgs/layer-1.png'
import bglayer2 from '../imgs/layer-2.png'
import bglayer3 from '../imgs/layer-3.png'
import bglayer4 from '../imgs/layer-4.png'
import bglayer5 from '../imgs/layer-5.png'

export default function useGame({ canva }) {

    let gameSpeed = 0

    const setGameSpeed = (newspeed) => {
        gameSpeed = newspeed
    }

    const initGame = () => {
        const can = canva.current
        const draw_ = can.getContext('2d')

        const CANVAS_WIDTH = can.width = 800
        const CANVAS_HEIGHT = can.height = 700

        // let gameFrame = 0

        const backgroundLayer1 = new Image()
        backgroundLayer1.src = bglayer1
        const backgroundLayer2 = new Image()
        backgroundLayer2.src = bglayer2
        const backgroundLayer3 = new Image()
        backgroundLayer3.src = bglayer3
        const backgroundLayer4 = new Image()
        backgroundLayer4.src = bglayer4
        const backgroundLayer5 = new Image()
        backgroundLayer5.src = bglayer5

        // let x = 0;
        // let x2 = 2400;

        // Can be used for different images
        // class Layer {
        //     constructor(image, speedModifier) {
        //         this.x = 0
        //         this.y = 0
        //         this.width = 2400
        //         this.height = 700
        //         this.x2 = this.width
        //         this.image = image
        //         this.speedModifier = speedModifier
        //         this.speed = gameSpeed * this.speedModifier
        //     }

        //     update() {
        //         this.speed = gameSpeed * this.speedModifier

        //         if(this.x < -this.width) {
        //             this.x = this.width + this.x2 - this.speed
        //         }
        //         if(this.x2 < -this.width) {
        //             this.x2 = this.width + this.x - this.speed
        //         }

        //         this.x = Math.floor(this.x - this.speed)
        //         this.x2 = Math.floor(this.x2 - this.speed)
        //     }

        //     draw() {
        //         this.update()
        //         draw_.drawImage(this.image, this.x, this.y, this.width, this.height)
        //         draw_.drawImage(this.image, this.x2, this.y, this.width, this.height)
        //     }
        // }

        class Layer {
            constructor(image, speedModifier) {
                this.x = 0
                this.y = 0
                this.width = 2400
                this.height = 700
                this.image = image
                this.speedModifier = speedModifier
                this.speed = gameSpeed * this.speedModifier
            }

            update() {
                this.speed = gameSpeed * this.speedModifier

                if(this.x < -this.width) {
                    this.x = 0
                }

                this.x = Math.floor(this.x - this.speed)

                // this.x = gameFrame * this.speed + this.width
            }

            draw() {
                this.update()
                draw_.drawImage(this.image, this.x, this.y, this.width, this.height)
                draw_.drawImage(this.image, this.x + this.width, this.y, this.width, this.height)
            }
        }


        const layer1 = new Layer(backgroundLayer1, 0.2)
        const layer2 = new Layer(backgroundLayer2, 0.4)
        const layer3 = new Layer(backgroundLayer3, 0.6)
        const layer4 = new Layer(backgroundLayer4, 0.8)
        const layer5 = new Layer(backgroundLayer5, 1)

        const gameObject = [layer1, layer2, layer3, layer4, layer5]

        const animate = () => {
            draw_.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

            // draw_.drawImage(backgroundLayer4, x, 0)
            // draw_.drawImage(backgroundLayer4, x2, 0)
            // if(x < -2400) x = 2400 + x2 - gameSpeed
            // else x -= gameSpeed
            // if(x2 < -2400) x2 = 2400 + x - gameSpeed
            // else x2 -= gameSpeed

            gameObject.forEach(layer => layer.draw())
            // gameFrame++
            requestAnimationFrame(animate)
        }
        animate()
    }

    return [initGame, setGameSpeed]
}
