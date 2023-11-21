export default interface IButtonProps {
    children: React.ReactNode
    clicked: React.MouseEventHandler<HTMLButtonElement>
    btnType: string
}