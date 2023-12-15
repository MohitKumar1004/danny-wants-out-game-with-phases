export default function useGame({ canva }) {

    const initGame = () => {
        const can = canva.current
        const draw_ = can.getContext('2d')

        const CANVAS_WIDTH = can.width = 600
        const CANVAS_HEIGHT = can.height = 600

        const animate = () => {
            
            requestAnimationFrame(animate)
        }
        animate()
    }

    return [initGame]
}
