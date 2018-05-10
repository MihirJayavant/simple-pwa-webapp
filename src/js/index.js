import './../css/style.css';
import { ServiceWorker } from './sw'
import { Student } from './student'
import M  from 'materialize-css/dist/js/materialize'
import chart from 'chart.js'
import { StudentManager } from "./student-manager"

class Contoller
{
    constructor()
    {
        this.list = document.getElementById('list');
        this.manager = new StudentManager(list);
        this.count = 0;
    }

    addStudent(name, url, sem)
    {
        this.count++;
        let s = new Student(this.count, name, url, sem);
        this.manager.addStudent(s);
    }

}

M.AutoInit();
let contoller = new Contoller();

document.getElementById("addBtn").addEventListener("click", addToList);

export function addToList()
{
    let f = document.forms["studentForm"];
    let sem = [];

    let name = f["name"].value;
    let url = f["url"].value;
    
    for (let i = 1; i <= 8; i++) 
    {
        let temp = f["sem"+i].value
        sem.push(Number(temp));
    }

    contoller.addStudent(name, url, sem);
}