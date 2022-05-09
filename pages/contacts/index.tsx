import { GetServerSideProps, NextPage } from "next";
import { IContacts } from "../../interfaces/props/IContacts";
import ContactComponent from "../../components/contacts/ContactComponent";

interface IProps {
    contacts: IContacts[];
}

export default function ContactPage (props: any) {
    return (
        <div>
            <ContactComponent {...props} />
        </div>
    )
}


export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch('http://localhost:5000/contacts');
    const contacts = await res.json();

    return { props: { contacts } };
}