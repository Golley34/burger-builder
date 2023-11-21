export default interface IModalProps {
    children: React.ReactNode
    show: boolean
    closed: React.MouseEventHandler<HTMLDivElement>
}