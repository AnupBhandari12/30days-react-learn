const users = [
    {
        id: 1,
        name: "Anup",
        email: "anup@example.com",
    },
    {
        id : 2,
        name: "Ram",
        email: "ram@example.com"
    },
];

export async function GET() {
    return Response.json(users);
}

export async function POST(request) {
    const body = await request.json();

    if(!body.name || !body.email){
        return Response.json(
            {
                message: "Name and email are required",
            },
            {
                status: 400,
            }
        );
    }

       const newUser ={
        id : users.length + 1,
        name: body.name,
        email: body.email,
    };

    return Response.json(
        {
            message: "User created successfully",
            user: newUser,
        },
        {
            status: 201,
        }
    );

}

export async function PUT(request) {
    const body = await request.json();

    if(!body.id || !body.name || !body.email){
        return Response.json(
            {
                message: "ID, name and email are required",
            },
            {
                status: 400,
            }
        );
    }

    const updateUser = {
        id : body.id,
        name : body.name,
        email : body.email,
    };

    return Response.json(
        {
            message: "User upadet sucessfullt",
            user: updateUser,
        },
        {
            status: 200,
        }
    )
}

export async function DELETE(request) {
    const body = await request.json();

    if(!body.id){
        return Response.json(
            {
                message: "User ID is required",
            },
            {
                status: 400,
            }
        );
    }
    return Response.json(
        {
            message : `User ${body.id} deleted successfully`,
        },
        {
            status: 200,
        },
    );
}