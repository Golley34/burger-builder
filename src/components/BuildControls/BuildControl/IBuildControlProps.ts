export default interface IBuildControlProps {
    type: string 
    added: React.MouseEventHandler<HTMLButtonElement>
    removed: React.MouseEventHandler<HTMLButtonElement>
    disabled: boolean
}