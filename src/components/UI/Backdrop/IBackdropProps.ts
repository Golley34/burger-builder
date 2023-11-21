import { MouseEventHandler } from "react"

export default interface IBackdropProps {
    show: boolean
    clicked: MouseEventHandler<HTMLDivElement>
}