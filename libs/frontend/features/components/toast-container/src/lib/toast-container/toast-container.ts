import { Component, inject } from '@angular/core';
import { ToastService } from '../services/toast-container-service';

@Component({
  selector: 'lib-toast-container',
  imports: [],
  templateUrl: './toast-container.html',
  styleUrl: './toast-container.scss',
})
export class ToastContainer {
  // Inject the service to read the signal
protected toastService = inject(ToastService);

}
