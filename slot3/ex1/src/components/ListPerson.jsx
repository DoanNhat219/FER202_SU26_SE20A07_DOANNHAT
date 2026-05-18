//2. hiển thị thông tin của từng người trong một danh sách gôm 10 người
// mỗi người có 3 thuộc tính: tên, tuổi, địa chỉ
import React from 'react';
function ListPerson() {
const people = [
        { name: 'Alice', age: 15 },
        { name: 'Bob', age: 30 },
        { name: 'Charlie', age: 25 },
        { name: 'Avid', age: 40 },
        { name: 'Eve', age: 18 },
        { name: 'Frank', age: 18 },
        { name: 'Grace', age: 55 },
        { name: 'Ceidi', age: 20 },
        { name: 'Ivan', age: 25 },
        { name: 'Budy', age: 50 }   
    ];
    // tìm người đầu tiên trong mảng people là thiếu niên (tuổi từ 13 đến 19)
     const firstteenager = people.find(person => person.age >= 13 && person.age <= 19);

     //
        const allteenager = people.filter(person => person.age >= 13 && person.age <= 19);
        //

        const everyteenager = people.every(person => person.age >= 13 && person.age <= 19);
        const anyteenager = people.some(person => person.age >= 13 && person.age <= 19);
    return (
        <>
             <div>
            <h2>Danh sách người</h2>
            <ul>
                {people.map((person, index) => (
                    <li key={index}>
                        <strong>{person.name}</strong> - {person.age} tuổi
                    </li>
                ))}
            </ul>
        </div>
        <h3>2.Find the first person off the people array is teenager</h3>
        <p>{firstteenager ? `Người đầu tiên là thiếu niên: ${firstteenager.name}` : 'no teenager found.'}</p>
        <h3>3.Find the all person of the people array is teenager</h3>
        <ul>
            {allteenager.map((person, index) => (
                <li key={index}>
                    <strong>{person.name}</strong> - {person.age} tuổi
                </li>
            ))}
        </ul>
        <h3>4.Check if every person of the people array is teenager  which should return true or false</h3>
        <p>{everyteenager ? 'Tất cả mọi người đều là thiếu niên.' : 'Không phải tất cả mọi người đều là thiếu niên.'}</p>
        <h3>5.Check if any person of the people array is teenager  which should return true or false.</h3>
        <p>{anyteenager ? 'Có ít nhất một người là thiếu niên.' : 'Không có ai là thiếu niên.'}</p>
        </>
   
    );
}

export default ListPerson;