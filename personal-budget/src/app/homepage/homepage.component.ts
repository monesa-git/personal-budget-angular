import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public dataChart = {
    datasets: [{
        data: [],
        backgroundColor:[],
    }],

    labels: []
};

 constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/budget')
    .subscribe((res: any) => {
      for(var i=0; i<res.myBudget.length; i++){
        this.dataChart.datasets[0].data[i] = res.myBudget[i].budget;
        this.dataChart.labels[i] = res.myBudget[i].title;
        this.dataChart.datasets[0].backgroundColor[i] = res.myBudget[i].color;
      }
      this.createChart();
    });
  }

  createChart(){
    // var ctx = document.getElementById("myChart").getContext("2d");
    var ctx = document.getElementById("myChart")
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data : this.dataChart
    }) ;
  }
}
