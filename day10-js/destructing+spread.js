const student = {
    name : "Anup",
    age : 22,
    course : "React",
}

const {name , course} = student;

console.log(name);
console.log(course);

const updateStudent = {
    ...student ,
    course : "Next.js",
};

console.log(updateStudent);

console.log(student);

//Optional Chaining ?. + nulish coalescing

const profile = {
    name : "Anup",
    social : null,
};

const instagram = profile.social?.instagram ?? "no Instagram"

console.log(instagram);

const std = {
    name : "Anup",
    details : {
        course: "react",
    },
};

const details = std.details?.course ?? "cources not Add";
const collage = std.details?.collage ?? "collage not add";

console.log(details)
console.log(collage)




