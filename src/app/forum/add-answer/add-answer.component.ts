import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'app-add-answer',
  templateUrl: './add-answer.component.html',
  styleUrls: ['./add-answer.component.css']
})
export class AddAnswerComponent {

  answerForm: any;

  constructor(private formBuilder: FormBuilder,private location:Location) { }

  ngOnInit() {
    this.answerForm = this.formBuilder.group({

      answer: ['', Validators.required]
    });
  }

  submitAnswer() {
   console.log(this.answerForm?.value);
  }
  navigateBack() {
    this.location.back();
  }
}



