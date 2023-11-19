import shadow_dog from '../imgs/shadow_dog.png'

export default function useGame({ canva }) {

    let playerState = 'idle'

    const setPlayerState = (value) => playerState = value

    const initGame = () => {
        const can = canva.current
        const draw_ = can.getContext('2d')

        const CANVAS_WIDTH = can.width = 600
        const CANVAS_HEIGHT = can.height = 600

        const playerImage = new Image()

        const spriteWidth = (6876/12 + 2)
        const spriteHeight = (5230/10)

        playerImage.src = shadow_dog

        // let frameX = 0
        // let frameY = 0

        let gameFrame = 0
        const staggerFrames = 5

        const spriteAnimations = []
        const animationStates = [
            {
                name: 'idle',
                frames: 7
            },
            {
                name: 'jump',
                frames: 7
            },
            {
                name: 'fall',
                frames: 7
            },
            {
                name: 'run',
                frames: 9
            },
            {
                name: 'dizzy',
                frames: 11
            },
            {
                name: 'sit',
                frames: 5
            },
            {
                name: 'roll',
                frames: 7
            },
            {
                name: 'bite',
                frames: 7
            },
            {
                name: 'ko',
                frames: 12
            },
            {
                name: 'gethit',
                frames: 4
            }
        ]

        animationStates.forEach((state, index) => {
            let frames = {
                loc: []
            }
            for(let i = 0; i < state.frames; i++) {
                let positionX = i * spriteWidth
                let positionY = index * spriteHeight
                frames.loc.push({ x: positionX, y: positionY })
            }
            spriteAnimations[state.name] = frames
        })

        const animate = () => {
            draw_.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

            // let position = Math.floor(gameFrame / staggerFrames) % 6

            // frameX = position * spriteWidth

            let position = Math.floor(gameFrame / staggerFrames) % spriteAnimations[playerState].loc.length
            let frameX = position * spriteWidth
            let frameY = spriteAnimations[playerState].loc[position].y

            // // uncropped image with original height and width with starting point(3 args)
            // draw_.drawImage(playerImage, 0, 0)

            // // uncropped image with stretched height and width with starting point(5 args)
            // draw_.drawImage(playerImage, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

            // // uncropped image with stretched height and width with starting point(9 args)
            // draw_.drawImage(playerImage, sx, sy, sw, sh, dx, dy, dw, dh)
            
            draw_.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight)
            // if (gameFrame % staggerFrames == 0) {
            //     if (frameX < 6) frameX++
            //     else frameX = 0
            // }
            gameFrame++

            requestAnimationFrame(animate)
        }
        animate()
    }

    return [initGame,setPlayerState]
}
