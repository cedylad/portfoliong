import { Component } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  emailCopied = false;

  constructor(private clipboardService: ClipboardService) {}

  copyEmailToClipboard() {
    const emailAddress = 'contact@cedy.fr';
    this.clipboardService.copy(emailAddress);
    this.emailCopied = true;
  }
}
