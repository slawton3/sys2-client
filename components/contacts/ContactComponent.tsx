import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { FunctionComponent } from "react"
import { IContacts } from "../../interfaces/props/IContacts"


const columns: GridColDef[] = [
    {field: 'contact_id', headerName: 'ID', width: 70},
    {field: 'full_name', headerName: 'First Name', width: 130},
    {field: '', headerName: 'Last Name', width: 130},
    {field: 'email', headerName: 'Email', width: 130},
    {field: 'phone_number', headerName: 'Phone Number', width: 130},
]


const ContactComponent: FunctionComponent = (props: any) =>{
    const contactData: IContacts[] = props.contacts

    console.log("Contact data => ", contactData);

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid 
                getRowId={row => row.contact_id}
                rows={contactData}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}

export default ContactComponent