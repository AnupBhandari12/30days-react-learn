import prisma from "../lib/prisma"

const email = "sanam@gmail.com";

const user = await prisma.user.update({
    where : {
        email,
    },
    data: {
        role: "ADMIN",
    },
});

console.log("Admin created");
console.log({
    id : user.id,
    name: user.name,
    email: user.email,
    role: user.role,
});

process.exit(0)

