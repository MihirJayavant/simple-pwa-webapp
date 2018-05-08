import './../css/style.css';
import { ServiceWorker } from './sw'
import { Student } from './student'
import M  from 'materialize-css/dist/js/materialize'

class Contoller
{
    constructor()
    {
        this.list = document.getElementById('list');
    }

    addStudent(name, url, sem)
    {
        let div = 
        `
        <div class="col s12 m4">
            <div class="card2 hoverable">

                <div class="row">
                    <div class="col s4">
                        <img class="circle responsive-img height1" 
                                    src="${url}" 
                                    alt="Avatar" >  
                    </div>
                    <div class="col s8">
                        <div class="name height1 valign-wrapper">${name}</div>
                    </div>
                </div>
            </div>
        </div>
        `

        list.innerHTML += div;
    }



}

M.AutoInit();
let contoller = new Contoller();
contoller.addStudent("Wow Working", "https://cdn-images-1.medium.com/max/1600/1*l0JiZHyCBXtgeMQyhBpT6g.png", []);