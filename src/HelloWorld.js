import React from 'react'

export default function HelloWorld() {
    const fullName = "Emil Alizade";
    return (
        <div>
            Hello People
            <br />
            <input type="checkbox" ></input>
            <br />
            <span className="nameone" >Emil Alizade</span>
            <div>
                <label for="name" >Ad</label>
                <input type="text"id="name" ></input>
            </div>
            <br />
            <div style={{ fontSize: "50px"}}> React Lessons </div>
            <br />
            <input type="text"  ></input>
            <br />
            <h1> JSX</h1>
            <div>Ad: {fullName} </div>
            <div>Age: 26</div>
            <div>Lesson: React Lesson</div>
        </div>
    )
}
