type AccountProps = {

    id: number
    client_id: string
    balance: string
    alias: string
}

export const Account = (props: AccountProps) => {
    return <div>
        {props.id} {props.client_id} {props.balance} {props.alias}
    </div>
}