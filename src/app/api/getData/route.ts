import { NextRequest, NextResponse as res } from "next/server";

type data = {
    id: String;
    name: String;
    username: String;
    email: String;
    address: {
        street: String;
        suite: String;
        city: String;
        zipcode: String;
        geo: {
            lat: String;
            lng: String;
        };
    };
    phone: String;
    website: String;
    company: {
        name: String;
        catchPhrase: String;
        bs: String;
    };
};

async function GET(req: NextRequest) {
    try {
        const data = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const response = await data.json();
        console.log(response);
        return res.json(response);
    } catch (error) {
        console.log(error);
    }
}

export { GET };
