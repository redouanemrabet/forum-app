import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { QuestionService } from 'src/app/service/question/question.service';

@Component({
  selector: 'app-add-answer',
  templateUrl: './add-answer.component.html',
  styleUrls: ['./add-answer.component.css']
})
export class AddAnswerComponent {

  answerForm: any;

  constructor(private formBuilder: FormBuilder, private questionService: QuestionService, private location: Location) { }

  ngOnInit() {
    this.answerForm = this.formBuilder.group({
      answer: ['', Validators.required]
    });
  }

  submitAnswer() {
    if (this.answerForm.valid) {
      const answerData = {
        content: this.answerForm.get('answer').value
      };

      this.questionService.addAnswerToQuestion(1,answerData).subscribe(response => {
        console.log('Answer added successfully:', response);
        
        this.navigateBack();
      }, error => {
        console.error('Error adding answer:', error);

      });
    }
  }

  navigateBack() {
    this.location.back();
  }
}
