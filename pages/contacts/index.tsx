import { GetServerSideProps } from "next";





export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch('http://localhost:5000/contacts');
    const data = await res.json();

    return { props: { data } }
}