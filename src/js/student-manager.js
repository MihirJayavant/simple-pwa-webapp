import $ from 'jquery';

export class StudentManager
{
    constructor(list)
    {
        this.list = list;
    }


    addStudent(student)
    {
        let div = 
        `
        <div class="col s12 m6">
            <div class="card2 hoverable">

                <div class="row">
                    <div class="col s4">
                        <img class="circle responsive-img height1" 
                                    src="${student.url}" 
                                    alt="Avatar" >  
                    </div>
                    <div class="col s8">
                        <div class="name height1 valign-wrapper">${student.name}</div>
                    </div>
                    <div class="col s12">
                        <canvas id="${"chart" + student.id}"></canvas>
                    </div>
                </div>
            </div>
        </div>
        `

        $("#list").append(div);

        this.addChart(student.id, student.sem);
    }

    addChart(id, sem)
    {
        let ctx = document.getElementById("chart" + id);
        let myLineChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["sem 1", "sem 2", "sem 3", "sem 4", "sem 5", "sem 6", "sem 7", "sem 8"],
                datasets: [{
                    label: 'Pointers',
                    data: sem,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }],
                    
                },
                elements: {
                    line: {
                        tension: 0, // disables bezier curves
                    }
                }
            }
        });
    }

}