const GET_STUDENTS = () => {
    const STUDENTS = [
        {
            name: "Person1",
            age: 20,
            address: `
            Line1,
            Line2,
            State,
            City,
            Pincode.
            `,
        },
        {
            name: "Person2",
            age: 40,
            address: `
            Line1,
            Line2,
            State,
            City,
            Pincode.
            `,
        },
        {
            name: "Person3",
            age: 50,
            address: `
            Line1,
            Line2,
            State,
            City,
            Pincode.
            `,
        },
        {
            name: "Person4",
            age: 35,
        }
    ];
    Object.freeze(STUDENTS);
    return STUDENTS;
};

const GET_PROMISE = (STUDENTS) => {
    const myPromise = new Promise((resolve, reject) => {
        if (STUDENTS.length > 0) {
            resolve("Success!");
        } else {
            reject("Failure!");
        }
    });
    return myPromise;
};

const DISPLAY_STUDENT_ADDRESS = (STUDENTS) => {
    for(let i = 0; i < STUDENTS.length; i++) {
        const ADDRESS_BTN = document.getElementById("address"+(i+1));
        ADDRESS_BTN.addEventListener("click", () => {
            const myPromise = new Promise((resolve, reject) => {
                if(STUDENTS[i].address !== undefined) {
                    resolve(STUDENTS[i].address);
                } else {
                    reject("Address not found!");
                }
            });
            setTimeout(() => {
                myPromise.then((message) => {
                    alert(message);
                }).catch((error) => {
                    alert(error);
                });
            }, 2000);
        });
    }
};

const SHOW_STUDENTS = (STUDENTS) => {

    const STUDENT_TABLE = document.createElement("table");
    STUDENT_TABLE.classList.add("table", "table-bordered");
    
    const STUDENT_TABLE_HEAD = document.createElement("thead");
    STUDENT_TABLE_HEAD.classList.add("table-dark");
    const STUDENT_HEADING = document.createElement("tr");

    const STUDENT_HEADING_NAME = document.createElement("th");
    STUDENT_HEADING_NAME.textContent = "Name";
    const STUDENT_HEADING_AGE = document.createElement("th");
    STUDENT_HEADING_AGE.textContent = "Age";
    const STUDENT_HEADING_ADDRESS = document.createElement("th");
    STUDENT_HEADING_ADDRESS.textContent = "Address";

    STUDENT_HEADING.appendChild(STUDENT_HEADING_NAME);
    STUDENT_HEADING.appendChild(STUDENT_HEADING_AGE);
    STUDENT_HEADING.appendChild(STUDENT_HEADING_ADDRESS);

    STUDENT_TABLE_HEAD.appendChild(STUDENT_HEADING);
    STUDENT_TABLE.appendChild(STUDENT_TABLE_HEAD);

    const STUDENT_TABLE_BODY = document.createElement("tbody");
    for(let i = 0; i < STUDENTS.length; i++) {

        const STUDENT_DATA = document.createElement("tr");
        
        const NAME = document.createElement("td");
        NAME.textContent = STUDENTS[i].name;
        const AGE = document.createElement("td");
        AGE.textContent = STUDENTS[i].age;
        const ADDRESS = document.createElement("td");

        const BUTTON = document.createElement("button");
        BUTTON.textContent = "address";
        BUTTON.id = "address"+(i+1);
        BUTTON.classList.add("btn", "btn-success");
        ADDRESS.appendChild(BUTTON);

        STUDENT_DATA.appendChild(NAME);
        STUDENT_DATA.appendChild(AGE);
        STUDENT_DATA.appendChild(ADDRESS);

        STUDENT_TABLE_BODY.appendChild(STUDENT_DATA);
    }
    STUDENT_TABLE.appendChild(STUDENT_TABLE_BODY);
    const STUDENT_DIV = document.getElementById("studentList");
    STUDENT_DIV.appendChild(STUDENT_TABLE);
    DISPLAY_STUDENT_ADDRESS(STUDENTS);
};

const CONSUME_PROMISE = () => {
    const myBtn = document.getElementById("btn");
    myBtn.addEventListener("click", () => {
        const STUDENTS = GET_STUDENTS();
        const myPromise = GET_PROMISE(STUDENTS);
        myPromise.then((message) => {
            myBtn.style.display = "none";
            setTimeout(() => {
                console.log(message);
                SHOW_STUDENTS(STUDENTS);
            }, 2000);
        }).catch((error) => {
            setTimeout(() => alert(error), 2000);
        });
    });
};

CONSUME_PROMISE();