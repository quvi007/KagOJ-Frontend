import { useLoaderData } from "react-router-dom";

export async function loader() {
    console.log("Hey there!");
    return {};
}

export default function Root() {
    useLoaderData();
    return <h1>Hello There!</h1>;
}