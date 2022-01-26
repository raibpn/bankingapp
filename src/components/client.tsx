interface ClientProps  {
    id: number
    name: {
        firstName: string
        lastName: string
    }
    city: string
    street: string
}

export const Client = (props: ClientProps) => {
    return <div>
        {props.name.firstName} {props.name.lastName}
    </div>
}