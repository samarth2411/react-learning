export function PropsDemo({sam, nitya}:any) {
    return <div>
        <h2>This is for passing props {sam}</h2>
        <h3>This is state of parent {nitya.name}</h3>
    </div>
}