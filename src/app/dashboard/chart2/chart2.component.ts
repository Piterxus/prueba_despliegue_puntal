import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Chart, ChartType } from 'chart.js/auto';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.css']
})
export class Chart2Component implements AfterViewInit  {
  
       constructor(private apiService: ApiService) {}
    
    ngAfterViewInit(): void {
      this.apiService.getEstancia2().subscribe(data => {
        const ctx = document.getElementById('ctx2') as HTMLCanvasElement;
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Meses', 'Días'],
            datasets: [{
              label: 'Duración media de estancia',
              data: [data.meses, data.dias],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(75, 192, 192, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)'
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
    