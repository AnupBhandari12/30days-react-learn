const users = [
  {
    id: 1,
    name: "Anup",
    email: "anup@example.com",
  },
  {
    id: 2,
    name: "Ram",
    email: "ram@example.com",
  },
];

export async function GET(request , {params}) {
    const {id} = await params;

    const user = users.find(
        (user) => user.id === Number(id)
    );

    if(!user){
        return Response.json(
            {
                message : "User not found",
            },
            {
                status : 404,
            }
        );
    }

    return Response.json(user);
}

export async function PUT(request , {params}) {
    const {id} = await params;
    const body = await request.json();

    if(!body.name || !body.email){
        return Response.json(
            {
                message : "Name and email are required",
            },
            {
                status : 400,
            }
        );

    }

    const user = users.find((user) => user.id === Number(id));

    if(!user){
        return Response.json(
            {
                message : "User not found",
            },
            {
                status : 404,
            }
        );
    }

    const updateUser = {
        id: Number(id),
        name : body.name,
        email : body.email,
    };

    return Response.json(
        {
            message: "User updated successfully",
            user : updateUser,
        },{
            status:200,
        }
    );
}

export async  function DELETE(request , {params}){
    const {id } = await params;

    const user = users.find((user) => user.id === Number(id))

    if(!user){
        return Response.json(
            {
                message : "User  not found" ,
            },
            {
                status: 404,
            }
        );
    }

    return Response.json(
        {
            message: `User ${id} deleted successfully`,
        },
        {
            status : 200,
        }
    );

}