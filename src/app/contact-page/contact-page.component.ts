import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { SiteEmailService } from '../site-email.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  emailForm = new FormGroup({
    email: new FormControl('', Validators.required),
    topic: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
}); 

  constructor(private siteEmailService: SiteEmailService) { }

  ngOnInit(): void {
  }

  onEmail(){
    let emailData = this.emailForm.value;
    let emailResponse = this.siteEmailService.sendEmail(emailData).subscribe((res) => {
      console.log(res);
    });

    // console.log(emailResponse);
  }

}
