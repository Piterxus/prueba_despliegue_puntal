import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Chart, ChartType } from 'chart.js/auto';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-chart4',
  templateUrl: './chart4.component.html',
  styleUrls: ['./chart4.component.css']
})
export class Chart4Component implements AfterViewInit {

  constructor(private apiService: ApiService) {}

  ngAfterViewInit(): void {
    this.apiService.getTiposEmbarcaciones().subscribe(data => {
      const ctx = document.getElementById('ctx4')as HTMLCanvasElement;
   

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data.tipos,
          datasets: [{
            label: 'Cantidad por tipo',
            data: data.conteos, 
            
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)'
             
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)'
           
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    });
  }
}