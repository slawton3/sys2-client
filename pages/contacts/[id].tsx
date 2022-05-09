import { GetServerSideProps, NextPage } from "next";
import { IContacts } from "../../interfaces/props/IContacts";
import ContactComponent from "../../components/contacts/ContactComponent";

export default function ContactIDPage (props: any) {
    return (
        <></>
    )
}


export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch('http://localhost:5000/contacts');
    const contacts = await res.json();

    return { props: { contacts } };
}