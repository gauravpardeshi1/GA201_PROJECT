import { Component } from '@angular/core';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent {

  isModalOpen: boolean = false;
  
  processing: boolean = false;
  openModal() {
    this.processing = true;

    // Simulate processing time (2 seconds) using setTimeout
    setTimeout(() => {
      // After 2 seconds (or whenever processing is done), set processing back to false
      this.processing = false;
      // Set isModalOpen to true to open the modal
      this.isModalOpen = true;
    }, 2000);
  }

  closeModal() {
    this.isModalOpen = false;
  }
  hideDiv: boolean = false;

  toggleDiv() {
    this.hideDiv = !this.hideDiv;
  }
}
