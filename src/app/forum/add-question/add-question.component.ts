import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  questionForm: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.questionForm = this.formBuilder.group({
      title: ['', Validators.required],
      questionDetails: ['', Validators.required],
      anonymous:[false]
    });
  }

  // Method to add the question
  submitForm() {
   console.log(this.questionForm?.value);
  }
}
