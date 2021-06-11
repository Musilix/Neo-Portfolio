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
    this.siteEmailService
      .sendEmail(emailData)
      .subscribe((res: boolean) => {
        console.log("Resonse in component: ");
        console.log(res);

        this.messageSent = res;
      });
  }
}
