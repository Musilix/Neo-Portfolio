import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  ReactiveFormsModule,
  FormsModule,
  UntypedFormGroup,
  UntypedFormControl,
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
  emailForm: UntypedFormGroup = new UntypedFormGroup({
    email: new UntypedFormControl("", Validators.required),
    topic: new UntypedFormControl("", Validators.required),
    message: new UntypedFormControl("", Validators.required),
  });

  messageSent: boolean;

  constructor(private siteEmailService: SiteEmailService) {}

  ngOnInit(): void {}

  onEmail() {
    // add class to form that
    let button: HTMLElement = document.getElementById("submit");
    console.log(this.emailForm.valid);

    if (this.emailForm.valid) {
      let emailData = this.emailForm.value;
      this.siteEmailService.sendEmail(emailData).subscribe((res: boolean) => {
        this.messageSent = res === undefined ? false : res;
      });
    }
  }
}
