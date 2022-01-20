import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import { Observable } from "rxjs";
import { SiteEmailService } from "../site-email.service";

@Component({
  selector: "app-contact-page",
  templateUrl: "./contact-page.component.html",
  styleUrls: ["./contact-page.component.css"],
})
export class ContactPageComponent implements OnInit {
  emailForm: FormGroup = new FormGroup({
    email: new FormControl("", Validators.required),
    topic: new FormControl("", Validators.required),
    message: new FormControl("", Validators.required),
  });

  messageSent: boolean;

  constructor(private siteEmailService: SiteEmailService) {}

  ngOnInit(): void {}

  onEmail() {
    let emailData = this.emailForm.value;
    let emailResponse = this.siteEmailService
      .sendEmail(emailData)
      .subscribe((res) => {
        //TODO
        if (res) {
          //clear form
          //show either error div or success div for 3 secs then hide again
          this.messageSent = true;
        }else{
          this.messageSent = false;
        }
      });
  }
}
