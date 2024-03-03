import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Chart, ChartType } from 'chart.js/auto';
import { ApiService } from 'src/app/services/api/api.service';
@Component({
  selector: 'app-chart3',
  templateUrl: './chart3.component.html',
  styleUrls: ['./chart3.component.css']
})export class Chart3Component implements AfterViewInit {

  constructor(private apiService: ApiService) {}

  
  ngAfterViewInit(): void {
    this.apiService.getDatosOcu().subscribe(data => {
      const ctx = document.getElementById('ctx3')as HTMLCanvasElement;
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['P.B.Ocupadas', 'P.B. Disponibles', 'P.B. en Mantenimiento', 'Tránsitos Ocupados', 'Tránsitos Disponibles', 'Tránsitos en Mantenimiento'],
          datasets: [{
            label: 'Estado de Ocupación',
            data: [
              data.plazas_base.ocupadas,
              data.plazas_base.disponible,
              data.plazas_base.mantenimiento,
              data.transitos.ocupados,
              data.transitos.disponible,
              data.transitos.mantenimiento
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
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